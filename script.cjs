const { execSync } = require('child_process');

function main() {
    const targetParam = process.argv[2];

    if (!targetParam) {
        console.error("[!] Error: Missing required target parameter.");
        console.log("Usage: node script.js <parameter>");
        process.exit(1);
    }

    console.log(`[*] Initializing process for: ${targetParam}`);

    try {
        const status = execSync('git status', { encoding: 'utf8' });
        console.log("[+] System check passed:\n", status);
    } catch (error) {
        console.error(`[!] Execution failed: ${error.message}`);
    }
}

main();
