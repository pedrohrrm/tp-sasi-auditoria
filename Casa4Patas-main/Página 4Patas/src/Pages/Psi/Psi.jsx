import React from 'react';
import Head from '../../Head';
import styles from '../../Styled Components/PetsPainel.module.css';

const PoliticaSeguranca = () => {
    const handleRedirect = () => {
        window.location.href = 'https://localhost:5001/';
    };
    

    return (
    <>
    
    {/* Botão de redirecionamento */}
    <button
            onClick={handleRedirect}
            style={{
              padding: '10px 10px',
              backgroundColor: 'black',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              marginTop: '30px', // Margem superior de 10px
              marginLeft: '190px', // Alinha o botão à direita
              marginRight: '80%',
            }}
          >
            Voltar
          </button>
      <Head title="Política de Segurança do Sistema" />
      <main className={`${styles.mainAdmin} animeLeft`}>        
        <section className={styles.content}>
        <h1><center> Conheça a nossa Política de Segurança</center></h1><br /><br />
          <h2>Objetivo</h2>
          <p>
            Assegurar que todas as informações sejam protegidas contra ameaças internas e externas, 
            sejam elas acidentais ou intencionais. Nosso compromisso inclui a segurança dos dados físicos 
            e digitais, de forma a atender aos requisitos de confidencialidade, integridade e disponibilidade.
          </p>
          <br /> 
          <h2>Diretrizes</h2>
          <h3>Confidencialidade</h3>
          <p>
            Apenas pessoas autorizadas têm acesso a informações sensíveis. Isso inclui dados pessoais, históricos 
            e informações de contato, protegendo a privacidade dos envolvidos.
          </p>

          <h3>Integridade</h3>
          <p>
            Mantemos a precisão e consistência dos dados em nossos sistemas, prevenindo alterações não autorizadas.
          </p>

          <h3>Disponibilidade</h3>
          <p>
            Asseguramos que as informações críticas estejam acessíveis quando necessário, sem interrupções indevidas.
          </p>

          <h3>Conformidade Legal</h3>
          <p>
            Cumprimos rigorosamente as leis de proteção de dados, incluindo a LGPD.
          </p>         
        <br /> 

          <h2>Normas de Segurança</h2>
          <ul>
            <li><strong>Controle de Acesso:</strong> Restringimos o acesso às informações conforme as necessidades de cada função, utilizando credenciais seguras.</li>
            <li><strong>Senhas e Autenticação:</strong> Adotamos práticas de autenticação robustas para proteger nossos sistemas contra acessos não autorizados.</li>
            <li><strong>Proteção Contra Malware:</strong> Todos os dispositivos são protegidos com antivírus e firewalls para evitar ameaças externas.</li>
            <li><strong>Uso de Dispositivos Externos:</strong> O uso de mídias externas é monitorado e controlado, com verificações de segurança antes do uso.</li>
            <li><strong>Backup de Dados:</strong> Realizamos backups periódicos para proteger informações essenciais, assegurando sua recuperação em caso de falhas.</li>
            <li><strong>Descarte Seguro de Informações:</strong> Informações sensíveis que não são mais necessárias são eliminadas de forma segura.</li>
          </ul>
        
          <br /> 
          <h2>Procedimentos Adicionais</h2>
          <ul>
            <li><strong>Treinamento e Conscientização:</strong> Todos os colaboradores recebem treinamentos periódicos sobre segurança da informação e proteção de dados.</li>
            <li><strong>Relato de Incidentes:</strong> Em caso de incidentes de segurança, seguimos procedimentos rápidos para minimizar danos.</li>
            <li><strong>Auditorias Internas:</strong> Realizamos auditorias para garantir o cumprimento de nossas políticas de segurança.</li>
          </ul>

          <p>
            Com essa política, nos comprometemos a proteger os dados e a confiança de nossos usuários e parceiros, promovendo um ambiente seguro e alinhado com os nossos valores de transparência e responsabilidade.
          </p>
        </section>
      </main>

    </>
  );
};

export default PoliticaSeguranca;