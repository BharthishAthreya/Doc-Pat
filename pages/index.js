import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/stethoscope.ico"/>
        <title>Doc-Pat Dashboard</title>
      </Head>
        <div className="welcomeBnr">Welcome to DOCPAT Dashboard</div>
        <Image src="/doctor-patient.jpg" width="100%" height="100%"></Image>
      <div className="docpat">
        <h1>Login As</h1>
        <div className="docpat_btns">
          <button className="btnDoctor">DOCTOR</button>
          <button className="btnPatient">PATIENT</button>
        </div>
      </div>
    </>
  );
}
