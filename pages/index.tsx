import Layout from '@/components/layout'
import Hero from '@/components/hero'
import Body from '@/components/body'
import Link from 'next/link';
import { HiHome } from "react-icons/hi";
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Body />
      <Link href="/" id='back-top' className={`button is-primary ${styles.to_top}`}>
        <span className="icon-text">
          <span className="icon">
            <HiHome />
          </span>
          <span>Inicio</span>
        </span>
      </Link>
    </Layout>
  );
}
