import { runTestCases } from "../../src/testHarness";
import { solve } from "./solution";
import { cases } from "./cases";

runTestCases("Reverse Integer", solve, cases);
