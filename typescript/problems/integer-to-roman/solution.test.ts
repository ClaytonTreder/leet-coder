import { runTestCases } from "../../src/testHarness";
import { solve } from "./solution";
import { cases } from "./cases";

runTestCases("Integer to Roman", solve, cases);
