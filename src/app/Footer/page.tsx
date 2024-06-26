'use client'
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';
import Lapdlogo from '../../../public/images/LAPD-Badge-Logo.png'; 

const Footer: React.FC = () => {
  return (
    <div>
      <div className={styles.footerContent}>
        <div className={styles.leftColumn}>
          <ul>
            <li><Link href="#" passHref>FILE A POLICE REPORT</Link></li>
            <li><Link href="#" passHref>OBTAIN A TRAFFIC COLLISION</Link></li>
            <li><Link href="#" passHref>CRIME MAPPINGS</Link></li>
            <li><Link href="#" passHref>REFERENCE LIBRARY</Link></li>
            <li><Link href="#" passHref>POLICE COMMISSION</Link></li>
          </ul>
        </div>
        <div className={styles.rightColumn}>
          <ul>
            <li><Link href="#" passHref>Our Values</Link></li>
            <li><Link href="#" passHref>News & Events</Link></li>
            <li><Link href="#" passHref>Investors</Link></li>
            <li><Link href="#" passHref>Health & Safety</Link></li>
            <li><Link href="#" passHref>Cultivate Foundation</Link></li>
            <li><Link href="#" passHref>All Locations</Link></li>
            <li><Link href="#" passHref>Sustainability</Link></li>
          </ul>
        </div>
        <div className={styles.centerColumn}>
          <Image src={Lapdlogo} alt="LAPD Logo" width={100} height={140} />
          <h2>JOIN LAPD</h2>
          <h2 style={{color:'#536C81',fontWeight:'400'}}>LOREM IPSUM</h2>
          <p>LOREM IPSUM LOREM IPSUM</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright ©2023 Los Angeles Police Foundation and the LAPD. All Rights Reserved.</p>
        <div>
          <Link href="#" passHref>Privacy Policy</Link>
          <Link href="#" passHref>Do Not Sell My Info</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
