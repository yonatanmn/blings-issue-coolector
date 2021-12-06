import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Blings issue collector!</title>
      </Head>

      <main>
     <p>Make sure to add:</p>
<ul>
<li>your name and email,</li>
<li>application (<code>Platform</code><code>Playground</code><code>AE Extension</code> or <code>Player/Engine</code>)</li>
<li>repro steps</li>
<li>screenshots or screen recordings</li>
</ul>
      </main>

//       <Footer />
    
    
    <script type="text/javascript" src="https://blingsio.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/-dtzt95/b/3/c95134bc67d3a521bb3f4331beb9b804/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?jsI18nTransformer=migrated&locale=en-US&collectorId=4d22b419"></script>


    </div>
  )
}
