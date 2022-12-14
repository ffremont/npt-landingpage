import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";

const Organisateurs = () => {
  const { niortTech, niortAgglo, cbe, eni, region } = useStaticQuery(graphql`
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

      region: file(base: { eq: "region.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width:200)
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
                    Bienvenue ?? l???Espace Niort TECH : lieu d??di?? ?? au num??rique
                    et au digital cr???? en juin 2018.
                    <br />
                    Le site accueille :
                  </p>
                  <ul className="block">
                    <li>
                      formations sup??rieures (universit?? de la Rochelle, digital
                      school -excelia groupe)
                    </li>
                    <li>h??tellerie d???entreprises (10 bureaux startups )</li>
                    <li>
                      un acc??l??rateur de startups (French Assurtech ??? d??di?? ??
                      l???accompagnement de startups dans le domaine de
                      l???assurance)
                    </li>

                    <li>un pr??-acc??l??rateur (Op??ration Dragon)</li>
                  </ul>
                  <p className="block">
                    Niort TECH est ?? la fois un espace de travail, de partage et
                    d???innovation qui cultive l???hybridation des projets.
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
                    CBE DU NIORTAIS ET HAUT VAL DE S??VRE
                  </p>
                  <p className="block">
                    Le Comit?? de Bassin d???Emploi du Niortais et Haut Val de
                    S??vre est un espace de dialogue et d???actions o?? se
                    retrouvent les diff??rents partenaires de la vie ??conomique
                    et sociale du territoire.
                    <br /> Cr???? en avril 2010, le CBE est une association de Loi
                    1901 qui d??veloppe ses missions dans les domaines
                    d???intervention suivants :
                  </p>
                  <ul className="block">
                    <li>
                      L???Observation Economique fond??e sur la prospective des
                      secteurs d???activit??s ;
                    </li>
                    <li>
                      La Gestion Territorialis??e Pr??visionnelle des Emplois et
                      des Comp??tences sur diff??rents secteurs d???activit?? ;
                    </li>
                    <li>La d??tection de gisements d???activit??s et d???emplois.</li>
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
                    alt="eni"
                  />
                </div>
                <div className="column is-8">
                  <p className="block has-text-weight-bold">
                    ENI ??COLE INFORMATIQUE
                  </p>
                  <p className="block">
                    L?????cole qui construit aux m??tiers de l???informatique de
                    demain.
                    <br /> Expert en informatique, nous construisons ensemble
                    votre parcours adapt?? ?? votre profil.
                    <br /> Formations d???excellence, ENI forme du Bac +2 ??? niveau
                    5 au Bac +5 ??? niveau 7 aux 2 grands m??tiers de
                    l???informatique :
                  </p>
                  <ul className="block">
                    <li>D??veloppement</li>
                    <li>Syst??me et r??seau</li>
                  </ul>
                  <p className="block">
                    L?????cole propose ??galement des formations plus courtes telles
                    que des POE et la formation D??couverte des M??tiers du
                    Num??rique.
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
                    style={{ width: "86%" }}
                    image={getImage(region.childImageSharp.gatsbyImageData)}
                    alt="r??gion"
                  />
                </div>
                <div className="column is-8 text-cofinancement">
                  <p className="block has-text-weight-bold">
                    Co-financement
                  </p>
                 
                  <p className="block">
                  Ev??nement organis?? avec le soutien financer de la r??gion Nouvelle-Aquitaine??
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
