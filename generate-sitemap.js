const isProduction = process.env.TRIKAYA_NODE_ENV === "production";

if (!isProduction) {
    console.log("⏭️  Skipping sitemap generation (non-production)");
    process.exit(0);
}

console.log("✅ Generating sitemap...");
import "next-sitemap";
