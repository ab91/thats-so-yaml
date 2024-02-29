// import React from 'react';
// import { generateYAML } from './yamlTemplate';

// const ProducedYAML = ({ region }) => {

//     //const yamlCode = generateYAML(region);

//     return (
//         `
//         apiVersion: v1alpha
//         kind: imagerunner
//         sauce:
//           region: ${region}
//           concurrency:
//           tunnel:
//             name:
//             owner:
//         suites:
//           - *name:
//             *workload:
//             resourceProfile:
//             *image:
//             imagePullAuth:
//               user:
//               token:
//             *entrypoint:
//             files: 
//               - src:
//               - dst:
//             env:
//               KEY:
//         artifacts:
//           -
//           cleanup: 
//           download:
//             when:
//             match:
//               -
//             directory:
//         reporters:
//           json:
//             enabled:
//             filename:
//             webhookURL:
//         `  
//     );
// };

// export default ProducedYAML;