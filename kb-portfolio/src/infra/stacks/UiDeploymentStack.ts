import { CfnOutput, Duration, Stack, StackProps } from "aws-cdk-lib";
import {
    AccessLevel,
    Distribution,
} from "aws-cdk-lib/aws-cloudfront";
import {
    Bucket,
} from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import { existsSync } from "fs";
import { join } from "path";
import { S3BucketOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import { getSuffixFromStack } from '../Utils';

export class UiDeploymentStack extends Stack {
    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props);

        const suffix = getSuffixFromStack(this); //KbPortfolioFrontend

        const deploymentBucket = new Bucket(this, "KbPortfolioFrontend", {
            bucketName: `kb-portfolio-ui-bucket-${suffix}`,

            // publicReadAccess: true,

            // blockPublicAccess: BlockPublicAccess.BLOCK_ACLS,

            websiteIndexDocument: "index.html",

            // cors: [
            //   {
            //     allowedMethods: [HttpMethods.GET],
            //     allowedOrigins: ["*"],
            //     allowedHeaders: ["*"],
            //   },
            // ],
        });

        // deploymentBucket.addToResourcePolicy(
        //   new PolicyStatement({
        //     actions: ["s3:GetObject"],
        //     resources: [`arn:aws:s3:::${deploymentBucket.bucketName}/*`],
        //     effect: Effect.ALLOW,
        //     principals: [new ArnPrincipal("*")], // Allow public access
        //   })
        // );

        const uiDir = join(
            __dirname,
            "..",
            "..",
            "..",
            "..",
            "kb-portfolio-frontend",
            "dist"
        );

        if (existsSync(uiDir)) {
            new BucketDeployment(this, "KbPortfolioUiDeployment", {
                destinationBucket: deploymentBucket,
                sources: [Source.asset(uiDir)],
            });

            const s3Origin = S3BucketOrigin.withOriginAccessControl(
                deploymentBucket,
                {
                    originAccessLevels: [AccessLevel.READ],
                }
            );

            const distribution = new Distribution(
                this,
                "KbPortfolioDistribution",
                {
                    defaultRootObject: "index.html",
                    defaultBehavior: {
                        origin: s3Origin,
                    },

                    errorResponses: [
                        {
                            httpStatus: 403,
                            responsePagePath: "/index.html", // Serve index.html for non-existing routes
                            responseHttpStatus: 200, // Treat as a successful response (200)
                            ttl: Duration.minutes(5), // Cache for 5 minutes (can adjust as needed)
                        },
                    ],
                }
            );

            new CfnOutput(this, "KbPortfolioUiDeploymentS3Url", {
                value: distribution.distributionDomainName,
            });
        } else {
            console.warn("Ui directory not found: " + uiDir);
        }
    }
}
