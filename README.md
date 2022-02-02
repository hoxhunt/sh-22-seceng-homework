# Summer Hunters 2022 - Product Security Engineer

## Homework assignment

Welcome to Summer Hunters 2022 assignment phase!

Within this assignment you will get to test using static analysis tool called Semgrep for finding bugs and security issues.

### Task:

Someone in ACME corporation has ordered a nodejs express application from third party to implement HTTP endpoint for saving user data. You have been tasked to use Semgrep to detect & discover security issues within the code. Semgrep has great documentation available [here](https://semgrep.dev/docs/).

## Get started 

1. Install [Semgrep](https://semgrep.dev/docs/getting-started/)
2. Fork the repository 
3. Test Semgrep by running provided example rule `semgrep --config rules.yaml` it should detect one issue within the code base
4. Start hunting and writing rules 


### Notes

Return the exercize as a private git repository and give access to `pyry`.

Try to keep the following things in mind

- Write all potential issues you detect as Semgrep rules 
- You may use or get inspiration from the ready made library of rules in Semgrep rule repository but understand how they operate 
- No need to change the code or improve it, it only required to implement suitable rules to detect current and potential issues
- After returning homework notify via email, during the homework review session be ready to present and discuss about your findings
