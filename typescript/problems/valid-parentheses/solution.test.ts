import { runTestCases } from "../../src/testHarness";
import { solve } from "./solution";
import { cases } from "./cases";

runTestCases("Valid Parentheses", solve, cases);
