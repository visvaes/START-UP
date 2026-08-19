import React from 'react'
import { Code2, Database, Cloud, Zap, CircuitBoard, Container } from 'lucide-react'

const skillGroups = [
  {
    title: 'Backend Development',
    icon: <Code2 />,
    items: ['Microsoft .NET', 'Java', 'Python', 'Node.js', 'Golang', 'PHP', 'C++']
  },
  {
    title: 'Frontend Development',
    icon: <Zap />,
    items: ['React JS', 'Angular JS', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS']
  },
  {
    title: 'Mobile Development',
    icon: <CircuitBoard />,
    items: ['iOS', 'Android', 'React Native', 'Flutter', 'Xamarin', 'Progressive Web Apps']
  },
  {
    title: 'Database & Storage',
    icon: <Database />,
    items: ['Microsoft SQL Server', 'PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Azure Cosmos DB', 'Amazon DynamoDB']
  },
  {
    title: 'Cloud Platforms',
    icon: <Cloud />,
    items: ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud Platform', 'DigitalOcean']
  },
  {
    title: 'DevOps & Containerization',
    icon: <Container />,
    items: ['Docker', 'Kubernetes', 'Jenkins', 'Azure DevOps', 'GitLab CI/CD', 'Terraform']
  },
  {
    title: 'Machine Learning & AI',
    items: ['TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'Scikit-learn', 'Amazon SageMaker', 'Azure ML']
  },
  {
    title: 'Big Data Technologies',
    items: ['Apache Hadoop', 'Apache Spark', 'Apache Kafka', 'Azure Synapse', 'Amazon Redshift']
  }
]

export default function Skills(){
  return (
    <section id="skills" className="py-16">
      <div className="max-w-4xl mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Technology Portfolio</h2>
        <p className="text-slate-600 text-lg">Our expert solution architects and software developers provide consulting services across a wide range of technologies and programming languages.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((g, i) => (
          <div key={i} className="bg-[#f3f4f6] rounded-lg border border-[#BAFF39] p-6">
            <div className="flex items-start gap-3 mb-4">
              {g.icon && <div className="text-[#BAFF39] text-2xl flex-shrink-0">{g.icon}</div>}
              <h3 className="font-semibold text-slate-900 text-lg">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item, j) => (
                <span key={j} className="text-xs bg-[#e5e7eb] text-[#2f2f2f] px-3 py-1 rounded-full border border-[#dfe3df]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-[#f3f4f6] rounded-lg p-8 text-center border border-[#BAFF39]">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">50+ Technologies</h3>
        <p className="text-slate-600 max-w-2xl mx-auto">We continuously expand our expertise across emerging and established technologies, ensuring your projects benefit from cutting-edge solutions and best practices.</p>
      </div>
    </section>
  )
}
