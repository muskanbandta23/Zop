
import { Competitor } from './types';

export const COMPETITORS: Competitor[] = [
  {
    id: 'cloudzero',
    name: 'CloudZero',
    website: 'https://www.cloudzero.com',
    linkedin: 'https://www.linkedin.com/company/cloudzero/',
    category: 'FinOps',
    brief: 'Enterprise-grade cost intelligence platform focusing on unit cost and engineering accountability.',
    strengths: ['Deep cost attribution', 'Shared cost allocation', 'Unit metrics'],
    gaps: ['Lacks active scheduling (ON/OFF) features', 'Complex setup compared to ZopNight'],
    zopEdge: 'ZopNight offers 1-click scheduling and automation which CloudZero largely lacks.'
  },
  {
    id: 'kubecost',
    name: 'Kubecost',
    website: 'https://www.apptio.com/products/kubecost/',
    linkedin: 'https://www.linkedin.com/company/kubecost/',
    category: 'Optimization',
    brief: 'Focused specifically on Kubernetes cost monitoring and real-time visibility.',
    strengths: ['Granular K8s metrics', 'Open-source roots', 'Integration with Apptio'],
    gaps: ['Narrow focus on K8s', 'Harder to manage non-K8s cloud resources'],
    zopEdge: 'ZopNight handles AWS, Azure, and GCP resources beyond just Kubernetes.'
  },
  {
    id: 'cast-ai',
    name: 'Cast AI',
    website: 'https://cast.ai',
    linkedin: 'https://www.linkedin.com/company/cast-ai/',
    category: 'Optimization',
    brief: 'Autonomous Kubernetes cost optimization using spot instances and autoscaling.',
    strengths: ['Aggressive K8s savings', 'Autonomous right-sizing'],
    gaps: ['Limited to Kubernetes', 'Automated changes can be scary for critical non-prod'],
    zopEdge: 'ZopNight offers safe, permission-aware scheduling across all cloud resource types.'
  },
  {
    id: 'nops',
    name: 'nOps',
    website: 'https://www.nops.io/',
    linkedin: 'https://www.linkedin.com/company/nopsio/',
    category: 'FinOps',
    brief: 'AWS-native cost optimization and resource management platform.',
    strengths: ['Deep AWS Well-Architected alignment', 'Commitment management'],
    gaps: ['Heavily AWS-biased', 'Multi-cloud features lag behind ZopNight'],
    zopEdge: 'ZopNight offers first-class support for AWS, GCP, and Azure equally.'
  },
  {
    id: 'spot-io',
    name: 'Spot.io (Flexera)',
    website: 'https://spot.io',
    linkedin: 'https://www.linkedin.com/company/spothq/',
    category: 'Automation',
    brief: 'Cloud cost optimization and workload automation, particularly for Spot instances.',
    strengths: ['Market leader in Spot Instances', 'NetApp enterprise support'],
    gaps: ['Spot-centric model can be risky for all non-prod loads', 'Complex logic'],
    zopEdge: 'ZopNight provides safer, scheduled shutdowns for standard instances, not just Spot management.'
  },
  {
    id: 'densify',
    name: 'Densify',
    website: 'https://www.densify.com',
    linkedin: 'https://www.linkedin.com/company/densify/',
    category: 'Optimization',
    brief: 'AI-driven analytics to optimize cloud and Kubernetes resource usage and efficiency.',
    strengths: ['Advanced predictive analytics', 'Precision right-sizing', 'Resource modeling'],
    gaps: ['Enterprise weight (can be slow to implement)', 'UI feels legacy'],
    zopEdge: 'ZopNight is lighter, faster to value, and focused on automated non-prod idle time.'
  },
  {
    id: 'cloudhealth',
    name: 'CloudHealth (VMware)',
    website: 'https://cloudhealthtech.com',
    linkedin: 'https://www.linkedin.com/company/cloudhealth-technologies/',
    category: 'FinOps',
    brief: 'The "Grandfather" of FinOps platforms, now part of VMware Tanzu.',
    strengths: ['Comprehensive reporting', 'Policy engine'],
    gaps: ['Clunky legacy UI', 'Very expensive', 'Slow innovation'],
    zopEdge: 'ZopNight provides modern developer experience and agile automation.'
  },
  {
    id: 'flexera',
    name: 'Flexera',
    website: 'https://www.flexera.com',
    linkedin: 'https://www.linkedin.com/company/flexera/',
    category: 'FinOps',
    brief: 'Comprehensive IT management solutions including cloud cost optimization.',
    strengths: ['Broad ITAM/SAM capabilities', 'Enterprise scale'],
    gaps: ['Not a point solution for cloud speed', 'Heavy installation requirements'],
    zopEdge: 'ZopNight is focused specifically on cloud efficiency without the legacy IT baggage.'
  },
  {
    id: 'harness',
    name: 'Harness',
    website: 'https://www.harness.io/product/cloud-cost-management',
    linkedin: 'https://www.linkedin.com/company/harness/',
    category: 'FinOps',
    brief: 'Cloud cost management integrated into a CI/CD orchestration platform.',
    strengths: ['Dev-first approach', 'Integration with CI/CD pipelines'],
    gaps: ['Cost management is an add-on to their main product', 'Can be complex for small teams'],
    zopEdge: 'ZopNight is a dedicated efficiency engine that doesn\'t require switching your CI/CD provider.'
  },
  {
    id: 'turbonomic',
    name: 'Turbonomic (IBM)',
    website: 'https://www.ibm.com/products/turbonomic',
    linkedin: 'https://www.linkedin.com/company/ibm-turbonomic/',
    category: 'Optimization',
    brief: 'Application resource management that continuously optimizes performance and cost.',
    strengths: ['AI-driven placement', 'Full stack visibility'],
    gaps: ['Very high price point', 'Often requires agent installation for deep metrics'],
    zopEdge: 'ZopNight is agentless and focused on the simple win: turning off what you don\'t use.'
  },
  {
    id: 'duplocloud',
    name: 'DuploCloud',
    website: 'https://duplocloud.com/',
    linkedin: 'https://www.linkedin.com/company/duplocloud/',
    category: 'IDP',
    brief: 'No-code/Low-code cloud automation for DevOps and compliance.',
    strengths: ['Rapid infrastructure deployment', 'Built-in compliance'],
    gaps: ['Less focus on deep cost optimization logic than ZopNight'],
    zopEdge: 'ZopNight complements IDPs by providing the "Manage smarter" efficiency layer.'
  },
  {
    id: 'parkmycloud',
    name: 'ParkMyCloud',
    website: 'https://www.parkmycloud.com',
    linkedin: 'https://www.linkedin.com/company/parkmycloud/',
    category: 'Automation',
    brief: 'Automated scheduling and cost control for multi-cloud environments.',
    strengths: ['Pioneer in scheduling'],
    gaps: ['Simple feature set', 'Now part of Turbonomic'],
    zopEdge: 'ZopNight has modern orchestration and much deeper Kubernetes support.'
  },
  {
    id: 'scaleops',
    name: 'ScaleOps',
    website: 'https://www.scaleops.com',
    linkedin: 'https://www.linkedin.com/company/scaleops-sh/',
    category: 'Automation',
    brief: 'Real-time automation of Kubernetes production and non-production environments.',
    strengths: ['Dynamic resource allocation', 'Low manual effort'],
    gaps: ['Relatively new player'],
    zopEdge: 'ZopNight has broader multi-cloud support beyond just Kubernetes.'
  },
  {
    id: 'astuto',
    name: 'Astuto',
    website: 'https://www.astuto.ai/',
    linkedin: 'https://www.linkedin.com/company/astuto-cloud/',
    category: 'FinOps',
    brief: 'Cloud optimization focusing on idle resources and automated savings.',
    strengths: ['User-friendly interface'],
    gaps: ['Smaller feature set'],
    zopEdge: 'ZopNight has more robust team-level budgets and automated enforcement policies.'
  },
  {
    id: 'neysa',
    name: 'Neysa',
    website: 'https://neysa.ai/',
    linkedin: 'https://www.linkedin.com/company/neysaai/',
    category: 'Optimization',
    brief: 'Next-gen platform focused on AI infrastructure optimization.',
    strengths: ['GPU-focused optimization'],
    gaps: ['Niche focus on AI workloads'],
    zopEdge: 'ZopNight covers general purpose cloud compute across the entire organization.'
  },
  {
    id: 'finout',
    name: 'Finout',
    website: 'https://www.finout.io/',
    linkedin: 'https://www.linkedin.com/company/finout/',
    category: 'FinOps',
    brief: 'Cloud cost management for modern cloud architectures like K8s, Snowflake, and Datadog.',
    strengths: ['Virtual tagging', 'Unit economics'],
    gaps: ['Observability focus rather than direct automation'],
    zopEdge: 'ZopNight focuses on direct resource state management (ON/OFF).'
  },
  {
    id: 'cloudpilot-ai',
    name: 'CloudPilot AI',
    website: 'https://cloudpilot.ai/',
    linkedin: 'https://www.linkedin.com/company/cloudpilot-ai/',
    category: 'Optimization',
    brief: 'AI-driven cloud infrastructure management and cost optimization.',
    strengths: ['Copilot for infrastructure'],
    gaps: ['Early stage'],
    zopEdge: 'ZopNight has more mature scheduling and multi-cloud visibility.'
  },
  {
    id: 'ternary',
    name: 'Ternary',
    website: 'https://www.ternary.app/',
    linkedin: 'https://www.linkedin.com/company/ternary-inc/',
    category: 'FinOps',
    brief: 'FinOps platform built for engineers and finance teams to collaborate on cloud costs.',
    strengths: ['GCP focus', 'Commitment modeling'],
    gaps: ['Less emphasis on non-GCP clouds'],
    zopEdge: 'ZopNight offers balanced multi-cloud optimization.'
  },
  {
    id: 'cloudability',
    name: 'Cloudability (IBM)',
    website: 'https://www.apptio.com/products/cloudability/',
    linkedin: 'https://www.linkedin.com/company/apptio/',
    category: 'FinOps',
    brief: 'Enterprise cloud cost management by Apptio (an IBM company).',
    strengths: ['Massive data processing', 'Finance reporting'],
    gaps: ['Very slow UI', 'Enterprise barrier to entry'],
    zopEdge: 'ZopNight is a nimble, developer-centric alternative.'
  },
  {
    id: 'datadog',
    name: 'Datadog',
    website: 'https://www.datadoghq.com/product/cloud-cost-management/',
    linkedin: 'https://www.linkedin.com/company/datadog/',
    category: 'FinOps',
    brief: 'Observability platform with an integrated cloud cost management module.',
    strengths: ['Unified monitoring and cost'],
    gaps: ['Expensive', 'Cost management is an add-on'],
    zopEdge: 'ZopNight is specialized and provides higher ROI for non-prod resource automation.'
  },
  {
    id: 'gcp-cost-mgmt',
    name: 'GCP Cost Management',
    website: 'https://cloud.google.com/cost-management',
    linkedin: 'https://www.linkedin.com/company/google-cloud/',
    category: 'FinOps',
    brief: 'Native Google Cloud tools for monitoring and optimizing spend.',
    strengths: ['Native integration', 'Free base tools'],
    gaps: ['GCP only', 'Lacks advanced multi-cloud orchestration'],
    zopEdge: 'ZopNight manages AWS and Azure alongside GCP in a single pane.'
  },
  {
    id: 'anodot',
    name: 'Anodot',
    website: 'https://www.anodot.com/cloud-cost-management/',
    linkedin: 'https://www.linkedin.com/company/anodot/',
    category: 'FinOps',
    brief: 'AI-powered anomaly detection and cloud cost optimization.',
    strengths: ['Anomaly detection', 'ML-driven forecasting'],
    gaps: ['Focus on alerts over remediation'],
    zopEdge: 'ZopNight goes beyond alerting to take automated action.'
  },
  {
    id: 'holori',
    name: 'Holori',
    website: 'https://holori.com/',
    linkedin: 'https://www.linkedin.com/company/holori/',
    category: 'Optimization',
    brief: 'Multi-cloud calculator, diagramming and cloud cost management.',
    strengths: ['Visual diagramming', 'Cost comparison'],
    gaps: ['Lacks deep operational automation'],
    zopEdge: 'ZopNight provides live, scheduled resource control.'
  }
];

export const ZOP_PRODUCT_BRIEF = {
  zopNight: "Intelligent FinOps automation that governs, optimizes, and right-sizes cloud spend across AWS, Google Cloud, and Azure. Up to 60% efficiency gains through 1-click scheduling.",
  zopDay: "Internal Developer Platform (IDP) to build faster, automating Kubernetes complexity and shipping production-ready environments in minutes."
};
