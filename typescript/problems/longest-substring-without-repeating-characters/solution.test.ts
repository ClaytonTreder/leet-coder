import { runTestCases } from "../../src/testHarness";
import { solve } from "./solution";
import { cases } from "./cases";

runTestCases("Longest Substring Without Repeating Characters", solve, cases);
