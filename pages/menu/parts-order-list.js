import Head from 'next/head';
import styles from '../../styles/menu.module.css';

export default function PartsOrder() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Parts Order List</title> 
      </Head>

      <main>
        <div>
            <h4 className={styles.title}>Parts Order List (ZONE)</h4>
        </div>
      </main>
    </div>
      
  )
}
