import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const image = formData.get("image") as File;

        if (!image) {
            return NextResponse.json(
                { error: "No image provided" },
                { status: 400 }
            );
        }

        // Prepare Sightengine API request
        const SIGHTENGINE_USER = process.env.SIGHTENGINE_API_USER;
        const SIGHTENGINE_SECRET = process.env.SIGHTENGINE_API_SECRET;

        // FOR MOCKING/DEMO PURPOSES: If no API keys are provided, return a simulated result
        if (!SIGHTENGINE_USER || !SIGHTENGINE_SECRET) {
            console.warn("Sightengine API keys missing. Returning mock response.");
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay

            // Predictably toggle based on filename for demo consistency
            const isAi = image.name.toLowerCase().includes("ai") || image.name.length % 2 === 0;
            const confidence = isAi ? 0.85 + Math.random() * 0.14 : 0.90 + Math.random() * 0.09;

            return NextResponse.json({
                ai_generated: isAi,
                confidence: parseFloat(confidence.toFixed(2))
            });
        }

        // Real API implementation
        const sightengineData = new FormData();
        sightengineData.append("media", image);
        sightengineData.append("models", "genit");
        sightengineData.append("api_user", SIGHTENGINE_USER);
        sightengineData.append("api_secret", SIGHTENGINE_SECRET);

        const response = await fetch("https://api.sightengine.com/1.0/check.json", {
            method: "POST",
            body: sightengineData,
        });

        const result = await response.json();

        if (result.status === "failure") {
            return NextResponse.json(
                { error: result.error.message },
                { status: 500 }
            );
        }

        // Sightengine returns confidence for 'ai_generated'
        const aiScore = result.type?.ai_generated || 0;
        const isAi = aiScore > 0.5;

        return NextResponse.json({
            ai_generated: isAi,
            confidence: aiScore
        });
    } catch (error: any) {
        console.error("Detection error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
