<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/toddjudd/ouc-functions">
    <img src="https://ouconstruct.com/static/media/logogreennopole.7ec17956a2189aff9418.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">OUC Functions</h3>

  <p align="center">
    Azure Functions
    <br />
    <br />
    <a href="https://github.com/toddjudd/ouc-functions/issues">Report Bug</a>
    ·
    <a href="https://github.com/toddjudd/ouc-functions/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a collection of Azure Functions that are used to support the OUC website
and applications.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![azure][azure.com]][azure-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an azure funciton based repo. Following this guide from
[Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-typescript?pivots=nodejs-model-v3)
will get you going quickly.

### Prerequisites

- Node 16
- npm 7
- Azure Functions Core Tools

```sh
npm i -g azure-functions-core-tools
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/toddjudd/ouc-functions.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Copy the local.settings.json.example to local.settings.json and add your Keys

   ```sh
   cp local.settings.json.example local.settings.json
   ```

   ClientId, ClientSecret, TenantId, and can be set up in Azure App
   Registrations. The App Registration will need to be granted access to the
   Graph API. As well as the following permissions:

   ```
    Mail.ReadWrite
    Mail.Send
    User.Read
    User.Read.All
    User.ReadWrite.All
   ```

   CONTACT_US_FROM_ID will be the Object ID of the azure user sending the email.

4. Run the project
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEPLOYMENT -->

## Deployment

Deployment is done with Github Actions. The workflow is located in
`.github/workflows/master_ouc-functions.yml`. The workflow will run on push to
the main branch.

Deployment can be done manually in VS code by right clicking on the function and
selecting Deploy to Function App.

Environment variables are set in the Azure Portal. Funciton App >
`Your Function Name` > Settings > Configuration > Application Settings.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

office@ouconstruct.com

Project Link:
[https://github.com/toddjudd/ouc-functions](https://github.com/toddjudd/ouc-functions)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]:
  https://img.shields.io/github/contributors/toddjudd/ouc-functions.svg?style=for-the-badge
[contributors-url]:
  https://github.com/toddjudd/ouc-functions/graphs/contributors
[forks-shield]:
  https://img.shields.io/github/forks/toddjudd/ouc-functions.svg?style=for-the-badge
[forks-url]: https://github.com/toddjudd/ouc-functions/network/members
[stars-shield]:
  https://img.shields.io/github/stars/toddjudd/ouc-functions.svg?style=for-the-badge
[stars-url]: https://github.com/toddjudd/ouc-functions/stargazers
[issues-shield]:
  https://img.shields.io/github/issues/toddjudd/ouc-functions.svg?style=for-the-badge
[issues-url]: https://github.com/toddjudd/ouc-functions/issues
[license-shield]:
  https://img.shields.io/github/license/toddjudd/ouc-functions.svg?style=for-the-badge
[license-url]: https://github.com/toddjudd/ouc-functions/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
[Azure.com]:
  https://img.shields.io/badge/azure-0769AD?style=for-the-badge&logo=azure&logoColor=white
[Azure-url]: https://Azure.com
