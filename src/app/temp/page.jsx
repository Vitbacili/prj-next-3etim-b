
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Links</h1>
      <Link  href={"/plano"}><p className={styles.linkTemp}>Listar Planos</p></Link>
      <Link  href={"/treino"}><p className={styles.linkTemp}>Listar Treinos</p></Link>
      <Link  href={"/usuarios/cadastrar"}><p className={styles.linkTemp}>Cadastrar usuarios</p></Link>
      <Link  href={"/usuarios/listar"}><p className={styles.linkTemp}>Listar usuarios</p></Link>
      <Link  href={"/usuarios/login"}><p className={styles.linkTemp}>Login</p></Link>
      <Link  href={"/usuarios/recsenha"}><p className={styles.linkTemp}>Recuperação de senha</p></Link>    
    </div>
  );
}
