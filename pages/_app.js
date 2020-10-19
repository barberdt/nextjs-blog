import { iris } from '@teachable/iris'
import Head from 'next/head'
import { useEffect } from 'react'
import '../styles/global.css'


function initIris() {
  const irisInstance = iris.init({
    selector: 'body',
    source: 'davis-test',
    noun: 'davis',
    url: 'https://eventable.teachable.cloud',
  })

  irisInstance.emit('page_loaded')
}

export default function App({ Component, pageProps }) {{
  useEffect(() => { initIris() }, [])
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{ __html: `
            !function(o,i){window.provesrc&&window.console&&console.error&&console.error("ProveSource is included twice in this page."),provesrc=window.provesrc={dq:[],display:function(){this.dq.push(arguments)}},o._provesrcAsyncInit=function(){provesrc.init({apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI1Zjg5ZWQyOWI3ZTYzMzVkYmVkMDliZTIiLCJpYXQiOjE2MDI4NzQ2NjV9.R8VX762KTqwD320aiYxVDh8JUlHiBij4Yl5tlK9LpUI",v:"0.0.4"})};var r=i.createElement("script");r.type="text/javascript",r.async=!0,r["ch"+"ar"+"set"]="UTF-8",r.src="https://cdn.provesrc.com/provesrc.js";var e=i.getElementsByTagName("script")[0];e.parentNode.insertBefore(r,e)}(window,document);
          `}}
        ></script>
        <script type="text/javascript" src="https://load.fomo.com/api/v1/a7NlgXCbR-8n2dOpROMK-g/load.js" async></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}}
