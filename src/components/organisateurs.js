import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";

const Organisateurs = () => {
  const { niortTech, niortAgglo, cbe, eni } = useStaticQuery(graphql`
    query organisateursQuery {
      niortTech: file(base: { eq: "niort-tech-logo.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }

      niortAgglo: file(base: { eq: "niort-agglo-logo.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }

      cbe: file(base: { eq: "cbe.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }

      eni: file(base: { eq: "logo-eni-gd.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <section className="organisateurs-component px-5">
      <div className="container is-max-widescreen pt-6">
        <div className="columns is-multiline">
          <div className="column is-12 has-text-centered">
            <h2>Co-organisateurs</h2>
          </div>
          <div className="column block is-12">
            <div className="box">
              <div className="columns is-variable is-6">
                <div className="column is-4">
                  <GatsbyImage
                    imgStyle={{ objectFit: "contain" }}
                    image={getImage(niortTech.childImageSharp.gatsbyImageData)}
                    alt="niort tech"
                  />
                  <GatsbyImage
                    imgStyle={{ objectFit: "contain" }}
                    image={getImage(niortAgglo.childImageSharp.gatsbyImageData)}
                    alt="niort agglo"
                  />
                </div>
                <div className="column is-8">
                  <p className="block has-text-weight-bold">
                    NIORT TECH ET NIORT AGGLO
                  </p>
                  <p className="block">
                    Bienvenue à l’Espace Niort TECH : lieu dédié à au numérique
                    et au digital créé en juin 2018.
                    <br />
                    Le site accueille :
                  </p>
                  <ul className="block">
                    <li>
                      formations supérieures (université de la Rochelle, digital
                      school -excelia groupe)
                    </li>
                    <li>hôtellerie d’entreprises (10 bureaux startups )</li>
                    <li>
                      un accélérateur de startups (French Assurtech – dédié à
                      l’accompagnement de startups dans le domaine de
                      l’assurance)
                    </li>

                    <li>un pré-accélérateur (Opération Dragon)</li>
                  </ul>
                  <p className="block">
                    Niort TECH est à la fois un espace de travail, de partage et
                    d’innovation qui cultive l’hybridation des projets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column block is-12">
            <div className="box">
              <div className="columns is-variable is-6">
                <div className="column is-4">
                  <GatsbyImage
                    imgStyle={{ objectFit: "contain" }}
                    image={getImage(cbe.childImageSharp.gatsbyImageData)}
                    alt="cbe niortais"
                  />
                </div>
                <div className="column is-8">
                  <p className="block has-text-weight-bold">
                    CBE DU NIORTAIS ET HAUT VAL DE SÈVRE
                  </p>
                  <p className="block">
                    Le Comité de Bassin d’Emploi du Niortais et Haut Val de
                    Sèvre est un espace de dialogue et d’actions où se
                    retrouvent les différents partenaires de la vie économique
                    et sociale du territoire.
                    <br /> Créé en avril 2010, le CBE est une association de Loi
                    1901 qui développe ses missions dans les domaines
                    d’intervention suivants :
                  </p>
                  <ul className="block">
                    <li>
                      L’Observation Economique fondée sur la prospective des
                      secteurs d’activités ;
                    </li>
                    <li>
                      La Gestion Territorialisée Prévisionnelle des Emplois et
                      des Compétences sur différents secteurs d’activité ;
                    </li>
                    <li>La détection de gisements d’activités et d’emplois.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="column block is-12">
            <div className="box">
              <div className="columns is-variable is-6">
                <div className="column is-4">
                  <GatsbyImage
                    imgStyle={{ objectFit: "contain" }}
                    style={{ width: "86%" }}
                    image={getImage(eni.childImageSharp.gatsbyImageData)}
                    alt="niort tech"
                  />
                </div>
                <div className="column is-8">
                  <p className="block has-text-weight-bold">
                    ENI ÉCOLE INFORMATIQUE
                  </p>
                  <p className="block">
                    L’école qui construit aux métiers de l’informatique de
                    demain.
                    <br /> Expert en informatique, nous construisons ensemble
                    votre parcours adapté à votre profil.
                    <br /> Formations d’excellence, ENI forme du Bac +2 – niveau
                    5 au Bac +5 – niveau 7 aux 2 grands métiers de
                    l’informatique :
                  </p>
                  <ul className="block">
                    <li>Développement</li>
                    <li>Système et réseau</li>
                  </ul>
                  <p className="block">
                    L’école propose également des formations plus courtes telles
                    que des POE et la formation Découverte des Métiers du
                    Numérique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organisateurs;
