'use client'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './try.module.css';

const Home = () => {
  const videos = [
    {
      url: "https://www.youtube.com/watch?v=fJWDvldWz-k ", 
      thumbnail: "/videoimage1.png", 
      title: "LAPD Heroes: The Voice "
    },
    {
      url: "https://www.youtube.com/watch?v=fJWDvldWz-k", 
      thumbnail: "/videoimage2.png", 
      title: "LAPD Heroes: The Voice "
    },
    {
      url: "https://www.youtube.com/watch?v=fJWDvldWz-k", 
      thumbnail: "/videoimage3.png", 
      title: "LAPD Heroes: The Voice "
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>LVMPD Heroes</title>
      </Head>
      <div className={styles.header}>
        <h1 style={{color:'#052942'}}>FEATURED</h1>
        <button className={styles.manualButton}>OPERATIONAL VIDEOS</button>
      </div>
      <div className={styles.videoSection}>
        {videos.map((video, index) => (
          <div className={styles.videoBox} key={index}>
            <Link href={video.url} passHref legacyBehavior>
              <a target="_blank" className={styles.videoOverlay}>
                <Image src={video.thumbnail} alt="Video Thumbnail" layout="fill" objectFit="cover" className={styles.thumbnail} />
                <div className={styles.playButton}></div>
              </a>
            </Link>
            <p className={styles.paratext}>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
