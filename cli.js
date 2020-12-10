#!/usr/bin/env node
"use strict";
const hac_k = require("@abdfnx/hac_k");
const manx = require("trash");

// Ignore all flags of `rm` program.
const ignoredFlags = ["r", "f", "i", "d", "P", "R", "v", "W"];

const ignoredFlagsConfig = {};
for (const flag of ignoredFlags) {
	ignoredFlagsConfig[flag] = {
		type: "boolean",
	};
}

const cli = hac_k(
	`
	Usage
	  $ manx <file/folder> […]

	Examples
	  # file
	  $ manx xcode.tsx layout.tsx edge.tsx
	  $ manx '*.tsx' '!xcode.tsx'
	  # folder
	  $ manx app
	`,
	{
		flags: {
			...ignoredFlagsConfig,
		},
	}
);

if (cli.input.length === 0) {
	console.error("Specify at least one path");
	process.exit(1);
}

manx(cli.input);
