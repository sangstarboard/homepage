import Head from 'next/head';
import styles from '../styles/menu.module.css';

export default function Menu() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Menu</title> 
      </Head>

    <main>
      <div>
        <h3 className={styles.card}>MJP Maintenance Assistance System</h3>
      </div>

      <div>
          <h4 className={styles.title}>Parts</h4>
      </div>
      <div>
        <img src="/header/header.png" alt="header" className={styles.logo} />
      </div>
      
      <hr className={styles.hr}></hr>

      <div className={styles.grid}>
        <div className={styles.row}>
          <p className={styles.column}>Parts order</p>
            <a href="/menu/parts-order" >
              <p className={styles.menu}>PARTS ORDER</p>
            </a>

          <p className={styles.column}>Parts kit</p>
            <a href="/menu/parts-kit">
              <p className={styles.menu}>PARTS KIT</p>
            </a>
        </div>

        <div className={styles.row}>
          <p className={styles.column}>Order confirmation</p>
          <a href="/menu/parts-order-list">
            <p className={styles.menu}>PARTS ORDER LIST (ZONE)</p>
          </a>

          <a href="">
            <p className={styles.menu}>PARTS ORDER LIST (ALL)</p>
          </a>

          <a href="">
            <p className={styles.menu}>ORDER PARTS SERCH</p>
          </a>

          <a href="">
            <p className={styles.menu}>受領者検索</p>
          </a>
          
        </div>  

        <div className={styles.row}>
          <p className={styles.column}>Docment drafting assistance</p>

          <a href="">
            <p className={styles.menu}>SPR</p>
          </a>

          <a href="">
            <p className={styles.menu}>良品票添付台紙</p>
          </a>

          <p className={styles.column}>Parts supply department</p>
          <a href="">
            <p className={styles.menu}>PARTS SUPPLY DEPARTMENT MENU</p>
          </a>
        </div>
    
      </div>

      <div>
        <h4 className={styles.title1}>Work Order</h4>
      </div>
      <hr className={styles.hr}></hr>

      <div className={styles.grid}>
        <div className={styles.row}>
          <p className={styles.column}>Task card</p>
            <a href="">
              <p className={styles.menu}>TASK CARD STATUS</p>
             </a>

            <a href="">
              <p className={styles.menu}>N/R TASK CARD STATUS</p>
            </a>
        </div>

        <div className={styles.row}>
          <p className={styles.column}>Line Maintenance</p>
          <a href="">
            <p className={styles.menu}>LINE定例作業</p>
          </a>
        </div>  
    
      </div>

      <div>
        <h4 className={styles.title1}>Tools</h4>
      </div>
      <hr className={styles.hr}></hr>

      <div className={styles.grid}>
        <div className={styles.row}>
          <p className={styles.column}>Tool order</p>
            <a href="">
              <p className={styles.menu}>TOOL ORDER</p>
            </a>
            <p className={styles.toolcolor}>Tool Kit/ Order履歴の閲覧もここから</p>
        </div>

        <div className={styles.row}>
          <p className={styles.column}>Tool check</p>
          <a href="">
            <p className={styles.menu}>TOOL INVENTORY</p>
          </a>
        </div>  
    
      </div>
      
    </main>
  </div>
  )
}
