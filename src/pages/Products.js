import { Header } from "../Header.js";
import Aid from "../3id.jpg";
import sableChoco from "../sableChoco.jpg";
import sable from "../choco.jpg";
import white from "../white.jpg";
import Braslet from "../les braslets.jpg";
import Sablechocof from "../Sablechocofor.jpg";
import maqrot from "../maqrot.jpg";
import cakeFor from "../cakes fourrees.jpg";
import wardat from "../wetdat.jpg";
 


 
export function Products() {
 
    
  
  return (
    <div>
      <Header style={{ margin: "0", boxShdow: "10px 10px 10px gray" }}></Header>

      <div style={{ backgroundColor: "rgb(157, 102, 119)" }}>
        <div className="products-title">
          <div
            style={{
              border: "2px solid white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontFamily: "imoji", marginTop: "60px" }}>
              Nos Creations
            </h1>
          </div>
        </div>

        <div className="products-grid">
          <PetitDiv
            
            names=" 1.Sablé "
            text={
              <>
              Une gourmandise
                généreusement nappée de chocolat et délicatement décorée de
                détails dorés, parfaite pour les occasions et les réceptions
                élégantes           </>
               
           
            }

          
            image={sableChoco}
          > {(<p onClick={ newComp()}>Version Arab</p>)}  </PetitDiv>

          <PetitDiv
            
            names="2.Sablé "
            text={
              <> Une pâtisserie algérienne raffinée au caractère traditionnel,
                préparée avec soin et sublimée par du chocolat et des touches
                dorées, pour une saveur authentique et élégante.
                
               {" "}
              </>
            }
            image={Aid}
          />

          <PetitDiv
            
            names="3.Fourré"
            text={
              <>Une pâtisserie raffinée recouverte d’une délicate couche de
                chocolat, fourrée au chocolat ou selon le choix du client, et
                sublimée par de jolies touches dorées.
                
                {" "}
              </>
            }
            image={sable}
          />

          <PetitDiv
            
            names="4.Kaàk"
            text={
              <>
                Une délicate pâtisserie au design blanc et raffiné, décorée de
                fleurs et de détails dorés, idéale pour les mariages et les
                occasions spéciales
                  {" "}
              </>
            }
            image={white}
          />

          <PetitDiv
            names="5.Braslet"
            text={
              <>
             Une délicieuse pâtisserie légère et croustillante,
                généreusement fourrée pour un goût gourmand et raffiné, parfaite
                avec un café ou un thé. 🤍
                   </>
            }
            image={Braslet}
          />

          <PetitDiv
            names="6.Sablé"
            text={
              <>Un délicieux sablé fondant, nappé de chocolat pour une
                saveur riche et gourmande, parfait pour les amateurs de
                chocolat. 🍫
                   </>
            }
            image={Sablechocof}
          />

          <PetitDiv
          names="7.Maqrot"
            text={
              <>
                Un délicieux makrout traditionnel préparé en sniwa,
                avec une texture fondante et une savoureuse garniture, pour un
                goût authentique et gourmand. 🤎
                        </>
            }
            image={maqrot}
          />

          <PetitDiv
          names="8.Cakes"
            text={
              <>
                 Un délicieux cake moelleux, fourré selon le choix et la
                demande du client, pour satisfaire toutes les envies. 🎂🤍
              </>
            }
            image={cakeFor}
          />

          <PetitDiv
          names="9.wardat"
            text={
              <>Une délicieuse pâtisserie en forme de rose, élégante et
                savoureuse, préparée avec soin pour sublimer vos occasions. 🌹🤍
              
                 </>
            }
            image={wardat}
          />
        </div>
      </div>
    </div>
  );
}

function PetitDiv({ image, text, names, setCart ,arab,children}) {
  
  return (
    <div className="product-card">
      <div>
        <img alt="" src={image} className="product-image" />
      </div>

      <div>
        <p>{names}</p>
        <p>{text}</p>
        
       
      </div>

      {/* <button onClick={() => setCart(prev => [...prev, names])} className="AcheterBtn" style={{borderRadius:"20px",
                border:"none",
                padding:"3px",
                width:"100%",
                backgroundColor:"rgb(154, 77, 95)"
                }}><p>Acheter</p></button> */}
    </div>
  );
  
}
function newComp(arab){
  
  return(
   
      <p>{arab}</p>
    
  )
}
