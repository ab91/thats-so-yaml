# Sauce Orchestrate YAML Config Generator

"That's SO YAML" is a YAML generator for use with the implementation of Sauce Orchestrate. Instead of assembling a YAML file themselves, clients may use the configurator to quickly generate one. Takes strong inspiration from Sauce Labs' Platform Configurator.

<p align="center">
  <img src="https://res.cloudinary.com/diwtiew1m/image/upload/v1709241032/Screenshot_2024-02-29_at_1.10.22_PM_ni4jjw.png" alt="Image of App"/>
</p>


## Live Site

View project at [https://sauceorchestrateyaml.netlify.app/](https://sauceorchestrateyaml.netlify.app/)

## Installation

First install the necessary dependencies

```bash
npm install
```

Then run the start script

```bash
npm start
```
## Known Issues

- [ ] Input validation shares state, resulting in "Please supply a value" error message across all inputs
- [ ] App can display maximum of 2 radio options
- [ ] GitHub logo hastily added to the site, needs proper markup + CSS treatment

## Areas of improvement

- [ ] Conditional rendering of YAML based on data that has been entered. All of the file should not be displayed if the values are missing.
