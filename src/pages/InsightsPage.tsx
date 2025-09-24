import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "5 Critical Mistakes That Kill Salesforce Implementations",
    excerpt: "Learn from the most common pitfalls that derail Salesforce projects and how to avoid them from day one.",
    content: `Salesforce implementations fail at an alarming rate—studies show that 70% of CRM projects don't meet their intended goals. After overseeing 100+ implementations, I've seen the same critical mistakes repeated across organizations of all sizes.

## 1. Skipping the Discovery Phase

The biggest mistake? Diving straight into configuration without understanding current processes. We once inherited a project where the previous consultant built a complex lead routing system—only to discover the sales team preferred manual lead assignment. Six months of work, wasted.

**Solution:** Invest 2-3 weeks in comprehensive discovery. Map current processes, interview actual users, and document pain points before touching Salesforce.

## 2. Over-Customization from Day One

"We're unique" is the death knell of successful implementations. Every organization thinks their processes are special, leading to excessive custom objects, fields, and workflows that create maintenance nightmares.

**Solution:** Start with 80% standard functionality. Customize only after proving the business case and user adoption.

## 3. Ignoring Data Quality

Garbage in, garbage out. I've seen companies spend $200K on Salesforce only to discover their lead conversion reports are meaningless because of duplicate accounts and inconsistent data entry.

**Solution:** Clean data before migration. Establish data governance rules and enforce them through validation rules and required fields.

## 4. Insufficient User Training

Technical training isn't enough. Users need to understand how Salesforce fits into their daily workflows and how it benefits them personally.

**Solution:** Role-based training that focuses on "what's in it for me" rather than just "how to click buttons."

## 5. No Executive Sponsorship

Without C-level commitment, Salesforce becomes "that system we have to use" instead of a strategic business tool.

**Solution:** Secure executive sponsorship before project kickoff. Regular executive check-ins and success metrics reporting are essential.

The key to avoiding these pitfalls? Work with experienced implementers who've seen these problems before and know how to prevent them.`,
    author: "Michael Rodriguez",
    date: "2024-09-15",
    readTime: "8 min read",
    category: "Implementation",
    slug: "critical-salesforce-implementation-mistakes"
  },
  {
    title: "Voice AI Architecture: Building Salesforce-Integrated Receptionists",
    excerpt: "Deep dive into the technical architecture behind AI voice systems that seamlessly integrate with Salesforce CRM.",
    content: `The integration of voice AI with Salesforce represents a significant leap in customer experience automation. Here's how we architect these systems for enterprise reliability and seamless CRM integration.

## Core Architecture Components

### 1. Speech Processing Pipeline
Our voice AI systems utilize a sophisticated pipeline:
- **Speech-to-Text (STT):** Real-time transcription using advanced models
- **Natural Language Processing:** Intent recognition and entity extraction
- **Text-to-Speech (TTS):** Natural voice synthesis for responses
- **Context Management:** Conversation state and memory

### 2. Salesforce Integration Layer
The magic happens in the integration:
- **Real-time API calls:** Instant lead creation and data updates
- **Workflow automation:** Trigger processes based on conversation outcomes  
- **Data enrichment:** Enhance existing records with conversation insights
- **Reporting integration:** Feed conversation analytics into Salesforce dashboards

## Technical Implementation

### FreeSWITCH Integration
We leverage FreeSWITCH for enterprise-grade call handling:

\`\`\`xml
<extension name="ai_receptionist">
  <condition field="destination_number" expression="^(\\d{10})$">
    <action application="set" data="continue_on_fail=true"/>
    <action application="socket" data="127.0.0.1:8084 async full"/>
  </condition>
</extension>
\`\`\`

This routes incoming calls to our AI processing engine while maintaining full call control.

### Salesforce API Integration
Real-time lead creation through REST API:

\`\`\`python
def create_salesforce_lead(conversation_data):
    headers = {
        'Authorization': f'Bearer {sf_token}',
        'Content-Type': 'application/json'
    }
    
    lead_data = {
        'FirstName': conversation_data['first_name'],
        'LastName': conversation_data['last_name'],
        'Company': conversation_data['company'],
        'Phone': conversation_data['phone'],
        'LeadSource': 'AI Voice Receptionist',
        'Description': conversation_data['transcript']
    }
    
    response = requests.post(
        f'{sf_instance}/services/data/v57.0/sobjects/Lead',
        headers=headers,
        json=lead_data
    )
\`\`\`

## Performance & Scalability

### Response Time Optimization
- **Edge deployment:** Reduce latency with geographically distributed processing
- **Connection pooling:** Maintain persistent Salesforce API connections
- **Caching layers:** Store frequently accessed data for faster responses

### Reliability Measures
- **Failover systems:** Automatic fallback to human operators
- **Health monitoring:** Real-time system status and performance metrics
- **Circuit breakers:** Prevent cascade failures during high load

## Security Considerations

Voice AI systems handling customer data require robust security:
- **End-to-end encryption:** All voice data encrypted in transit and at rest
- **PII handling:** Automatic detection and protection of sensitive information
- **Audit logging:** Complete conversation and data access trails
- **Compliance:** GDPR, CCPA, and industry-specific requirements

## Future Developments

The next evolution includes:
- **Emotion recognition:** Detect customer sentiment and adjust responses
- **Multi-language support:** Real-time translation and localization
- **Predictive analytics:** Anticipate customer needs based on conversation patterns
- **Integration expansion:** Connect with additional business systems beyond Salesforce

Building these systems requires deep expertise in both AI/ML and Salesforce architecture. The investment pays off through dramatically improved customer experience and lead conversion rates.`,
    author: "Sarah Chen",
    date: "2024-09-10",
    readTime: "12 min read",
    category: "Technical",
    slug: "voice-ai-salesforce-architecture"
  },
  {
    title: "Salesforce Data Hygiene: The Foundation of Effective CRM",
    excerpt: "Why clean data is critical for Salesforce success and practical strategies to maintain data quality at scale.",
    content: `Data quality issues plague 90% of Salesforce orgs we audit. Poor data hygiene doesn't just affect reports—it undermines user adoption, inflates costs, and destroys trust in the system.

## The True Cost of Dirty Data

### Business Impact
- **Lost deals:** Sales reps can't find the right contacts
- **Wasted marketing spend:** Campaigns target duplicate or invalid records  
- **Poor decisions:** Reports based on inaccurate data mislead executives
- **Compliance risks:** GDPR violations from outdated contact information

### Technical Debt
- **Performance degradation:** Large volumes of unused data slow queries
- **Storage costs:** Duplicate records inflate Salesforce storage fees
- **Integration failures:** Poor data quality breaks automated processes
- **Maintenance overhead:** Cleaning up bad data consumes admin time

## Data Quality Framework

### 1. Prevention (Best Defense)
**Validation Rules:** Prevent bad data entry at the source
\`\`\`
Phone: REGEX(Phone, "^[0-9]{10}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$")
Email: REGEX(Email, "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")
\`\`\`

**Required Fields:** Force complete data entry for critical fields
**Picklist Values:** Standardize entries and prevent free-text variations
**Duplicate Management:** Enable Salesforce duplicate detection rules

### 2. Detection (Early Warning)
**Data Quality Dashboard:** Monitor key metrics
- Duplicate record percentage
- Incomplete record counts  
- Invalid email addresses
- Stale data indicators

**Automated Alerts:** Notify admins when quality thresholds are breached
**Regular Audits:** Monthly reviews of data quality metrics

### 3. Remediation (Cleaning Process)
**Duplicate Merge:** Systematic approach to consolidate records
1. Identify duplicates using matching rules
2. Determine master record (most complete/recent)
3. Merge systematically, preserving critical data
4. Update related records and activities

**Data Standardization:** 
- Phone number formatting
- Address standardization  
- Company name normalization
- Industry classification consistency

### 4. Governance (Ongoing Maintenance)
**Data Stewardship:** Assign owners for different data types
**Training Programs:** Regular user education on data entry standards
**Process Documentation:** Clear guidelines for data management
**Regular Reviews:** Quarterly data quality assessments

## Implementation Roadmap

### Phase 1: Assessment (Week 1-2)
- Data quality audit using tools like DemandTools or native reports
- Identify top 5 data quality issues impacting business
- Calculate ROI of cleanup efforts

### Phase 2: Quick Wins (Week 3-4)  
- Implement validation rules for new data
- Set up duplicate detection rules
- Create data quality dashboard

### Phase 3: Cleanup (Month 2-3)
- Systematic duplicate merging
- Data standardization project
- Historical data cleanup

### Phase 4: Governance (Ongoing)
- User training programs
- Data stewardship processes
- Continuous monitoring and improvement

## Tools and Techniques

### Native Salesforce Features
- **Duplicate Management:** Built-in detection and prevention
- **Validation Rules:** Enforce data standards
- **Data Import Wizard:** Includes duplicate checking
- **Reports & Dashboards:** Monitor data quality metrics

### Third-Party Solutions
- **DemandTools:** Comprehensive data management suite
- **Duplicate Check:** Advanced duplicate detection
- **DataGroomr:** Automated data cleansing
- **RingLead:** Lead management and deduplication

## Measuring Success

Key metrics to track data quality improvement:
- **Duplicate Rate:** Target <2% duplicate accounts/contacts
- **Completeness:** >95% of records have required fields populated
- **Accuracy:** Regular validation of sample data sets
- **User Satisfaction:** Survey adoption and system trust levels

Clean data isn't a one-time project—it's an ongoing discipline that requires commitment from both leadership and users. The investment in proper data hygiene pays dividends in user adoption, sales effectiveness, and business intelligence quality.`,
    author: "Michael Rodriguez", 
    date: "2024-09-05",
    readTime: "10 min read",
    category: "Best Practices",
    slug: "salesforce-data-hygiene-guide"
  }
];

export function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Insights & Expertise
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Deep dives into Salesforce implementation, AI integration, and best practices 
                from our team of certified architects.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {blogPosts.map((post, index) => (
                  <article key={index} className="card p-8">
                    <div className="mb-4">
                      <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <span className="font-medium">{post.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    {/* Blog content preview */}
                    <div className="prose prose-gray max-w-none mb-8">
                      <div className="text-gray-700 leading-relaxed">
                        {post.content.split('\n\n')[0]}...
                      </div>
                    </div>
                    
                    <Button variant="outline" className="group">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gray-50 py-16">
          <div className="container-width section-padding">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get the latest insights on Salesforce implementation and AI integration 
                delivered to your inbox monthly.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
                <Button type="submit">
                  Subscribe
                </Button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 py-16">
          <div className="container-width section-padding text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Expert Salesforce Guidance?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get personalized advice from our certified architects to solve your specific challenges.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open('https://calendly.com/thecrmwizards/consultation', '_blank')}
            >
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
