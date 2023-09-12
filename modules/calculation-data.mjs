export const fromUnits = {
    Length: {
        Meter: "",
        Kilometer: "*1000",
        Centimeter: "/100",
        Millimeter: "/1000",
        Micrometer: "/1000000",
        Nanometer: "/1000000000",
        Mile: "*1609.344",
        Yard: "*0.9144",
        Foot: "*0.3048",
        Inch: "*0.0254",
        Lightyear: "/0.00000000000000010570"
    },
    Temperature: {
        Celsius: "",
        Kelvin: "- 273.15",
        Fahrenheit: " - 32 * 0.5556",
    },
    Weight: {
        Kilogram: "",
        Gram: "/1000",
        Milligram: "/1000000",
        Metric_Ton: "*1000",
        Long_Ton: "*1016.0469",
        Short_Ton: "/0.0011023",
        Pound: "*0,45359237",
        Ounce: "/35,27396195",
        Carat: "/5000",
    },
    Volume: {
        Cubic_Meter: "",
        Cubic_Kilometer: "*1000000000",
        Cubic_Centimeter: "*0.000001",
        Cubic_Millimeter: "*0.000000001",
        Liter: "/1000",
        Milliliter: "/1000000",
        US_Gallon: "*0.003785",
        US_Quart: "*0.000946",
        US_Pint: "*0.000473",
        US_Cup: "*0.000237",
        US_Fluid_Ounce: "*2.9574E-5",
        US_Table_Spoon: "*1.4787E-5",
        US_Tea_Spoon: "*4.9289E-6",
        Imperial_Gallon: "*219.969152",
        Imperial_Quart: "*0.001137",
        Imperial_Pint: "*0.0005683",
        Imperial_Fluid_Ounce: "*0.00003552",
        Imperial_Table_Spoon: "*0.00001776",
        Imperial_Tea_Spoon: "*0.00000444",
        Cubic_Mile: "*4168181825.4406",
        Cubic_Yard: "*0.764554857984",
        Cubic_Foot: "*0.02832",
        Cubic_Inch: "*0.00001639",
    },
    Area: {
        Square_Meter: "",
        Square_Kilometer: "*1000000",
        Square_Centimeter: "/10000",
        Square_Millimeter: "/1000000",
        Square_Micrometer: "/1000000000000",
        Hectare: "/0.00010000",
        Square_Mile: "*2589988.11",
        Square_Yard: "/1.1960",
        Square_Foot: "/10.764",
        Square_Inch: "*0.000645",
        Acre: "/0.00024711"
    },
    Time: {
        Second: "",
        Millisecond: "/1000",
        Microsecond: "/1000000",
        Nanosecond: "/1000000000",
        Picosecond: "/1e+12",
        Minute: "*60",
        Hour: "*3600",
        Day: "*86400",
        Week: "*604800",
        Month: "*2629746",
        Year: "*31556952"
    }
}

export const toUnits = {
    Length: {
        Meter: "",
        Kilometer: "/1000",
        Centimeter: "*100",
        Millimeter: "*1000",
        Micrometer: "*1000000",
        Nanometer: "*1000000000",
        Mile: "/1609.344",
        Yard: "/0.9144",
        Foot: "/0.3048",
        Inch: "/0.0254",
        Lightyear: "*0.00000000000000010570"
    },
    Temperature: {
        Celsius: "",
        Kelvin: " + 273.15",
        Fahrenheit: "* 1.8 + 32",
    },
    Weight: {
        Kilogram: "",
        Gram: "*1000",
        Milligram: "*1000000",
        Metric_Ton: "/1000",
        Long_Ton: "*0.000984",
        Short_Ton: "*0.0011023",
        Pound: "/0,45359237",
        Ounce: "*35,27396195",
        Carat: "*5000",
    },
    Volume: {
        Cubic_Meter: "",
        Cubic_Kilometer: "/1000000000",
        Cubic_Centimeter: "/0.000001",
        Cubic_Millimeter: "/0.000000001",
        Liter: "*1000",
        Milliliter: "*1000000",
        US_Gallon: "/0.003785",
        US_Quart: "/0.000946",
        US_Pint: "/0.000473",
        US_Cup: "/0.000237",
        US_Fluid_Ounce: "/2.9574E-5",
        US_Table_Spoon: "/1.4787E-5",
        US_Tea_Spoon: "/4.9289E-6",
        Imperial_Gallon: "/219.969152",
        Imperial_Quart: "/0.001137",
        Imperial_Pint: "/0.0005683",
        Imperial_Fluid_Ounce: "/0.00003552",
        Imperial_Table_Spoon: "/0.00001776",
        Imperial_Tea_Spoon: "/0.00000444",
        Cubic_Mile: "/4168181825.4406",
        Cubic_Yard: "/0.764554857984",
        Cubic_Foot: "/0.02832",
        Cubic_Inch: "/0.00001639",
    },
    Area: {
        Square_Meter: "",
        Square_Kilometer: "/1000000",
        Square_Centimeter: "*10000",
        Square_Millimeter: "*1000000",
        Square_Micrometer: "*1000000000000",
        Hectare: "*0.00010000",
        Square_Mile: "/2589988.11",
        Square_Yard: "*1.1960",
        Square_Foot: "*10.764",
        Square_Inch: "/0.000645",
        Acre: "*0.00024711"
    },
    Time: {
        Second: "",
        Millisecond: "*1000",
        Microsecond: "*1000000",
        Nanosecond: "*1000000000",
        Picosecond: "*1e+12",
        Minute: "/60",
        Hour: "/3600",
        Day: "/86400",
        Week: "/604800",
        Month: "/2629746",
        Year: "/31556952"
    }
}