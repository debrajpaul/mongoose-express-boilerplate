const SockService = require("../services/sock-service");

describe("Sample test suite", () => {
    it("This should pass", () => {
        expect(true).toEqual(true);
    });
});

describe("****** Running Customer Segmentation Test Suite **********", () => {
    it("###### TestCase for RFM calculation ", async () => {
        const data = "30";
        const sockService = new SockService();
        const actualOutput = await sockService.stockTickerPrices(data);
        const expectedOutput = [
            "Intraday (30min) open, high, low, close prices and volume",
            "MSFT",
            "30min",
            "Compact",
            "US/Eastern",
        ];
        expect(expectedOutput[0]).toEqual(
            actualOutput.result["Meta Data"]["1. Information"]
        );
        expect(expectedOutput[1]).toEqual(
            actualOutput.result["Meta Data"]["2. Symbol"]
        );
        expect(expectedOutput[2]).toEqual(
            actualOutput.result["Meta Data"]["4. Interval"]
        );
        expect(expectedOutput[3]).toEqual(
            actualOutput.result["Meta Data"]["5. Output Size"]
        );
        expect(expectedOutput[4]).toEqual(
            actualOutput.result["Meta Data"]["6. Time Zone"]
        );
    });
});
