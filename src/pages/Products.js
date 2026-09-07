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

export function Products({ setCart }) {
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
            setCart={setCart}
            names="Sablé "
            text={
              <>
                Sable : قطعة شهية مغطاة بالشوكولا، مزينة بتفاصيل ذهبية أنيقة،
                مثالية للمناسبات والضيافة الراقية. <br></br>Une gourmandise
                généreusement nappée de chocolat et délicatement décorée de
                détails dorés, parfaite pour les occasions et les réceptions
                élégantes.
              </>
            }
            image={sableChoco}
          />

          <PetitDiv
            setCart={setCart}
            names="Sablé "
            text={
              <>
                Sablé :حلوى جزائرية راقية بطابع تقليدي، محضرة بعناية ومزينة
                بالشوكولا واللمسات الذهبية، لتمنحكم مذاقًا أصيلًا وأنيقًا.
                <br></br>
                Une pâtisserie algérienne raffinée au caractère traditionnel,
                préparée avec soin et sublimée par du chocolat et des touches
                dorées, pour une saveur authentique et élégante.{" "}
              </>
            }
            image={Aid}
          />

          <PetitDiv
            setCart={setCart}
            names="Fourré"
            text={
              <>
                Fourré:حلوى فاخرة بطبقة شوكولا ناعمة، محشية بالشوكولا أو بالحشوة
                التي يختارها الزبون، ومزينة بلمسات ذهبية أنيقة.
                <br></br>
                Une pâtisserie raffinée recouverte d’une délicate couche de
                chocolat, fourrée au chocolat ou selon le choix du client, et
                sublimée par de jolies touches dorées.{" "}
              </>
            }
            image={sable}
          />

          <PetitDiv
            setCart={setCart}
            names="Kaàk"
            text={
              <>
                {" "}
                Kaàk: قطعة ناعمة وأنيقة بتصميم أبيض فاخر، مزينة بالزهور
                والتفاصيل الذهبية، مثالية للأعراس والمناسبات الخاصة.
                <br></br>
                Une délicate pâtisserie au design blanc et raffiné, décorée de
                fleurs et de détails dorés, idéale pour les mariages et les
                occasions spéciales{" "}
              </>
            }
            image={white}
          />

          <PetitDiv
            names="Braslet"
            text={
              <>
                Braslet :حلوة هشة ولذيذة، محشوة بحشوة غنية تمنحها مذاقًا شهيًا
                ومميزًا، مثالية مع القهوة والشاي. 🤍
                <br></br> Une délicieuse pâtisserie légère et croustillante,
                généreusement fourrée pour un goût gourmand et raffiné, parfaite
                avec un café ou un thé. 🤍{" "}
              </>
            }
            image={Braslet}
          />

          <PetitDiv
            names="Sablé"
            text={
              <>
                Sablé : صابلي هش ولذيذ، مغطى بالشكولاطة ليمنحه مذاقًا
                غنيًاوشهيًا، مثالي لمحبي الشكولاطة. 🍫
                <br></br>Un délicieux sablé fondant, nappé de chocolat pour une
                saveur riche et gourmande, parfait pour les amateurs de
                chocolat. 🍫{" "}
              </>
            }
            image={Sablechocof}
          />

          <PetitDiv
            text={
              <>
                Maqrot: مقروط السنيوة التقليدي، بطبقات هشة وحشوة لذيذة، محضر
                بعناية ليقدم مذاقًا أصيلًا وشهيًا. 🤎
                <br></br>Un délicieux makrout traditionnel préparé en sniwa,
                avec une texture fondante et une savoureuse garniture, pour un
                goût authentique et gourmand. 🤎
              </>
            }
            image={maqrot}
          />

          <PetitDiv
            text={
              <>
                Cakes: كيكة طرية ولذيذة، محشوة حسب اختيار وطلب الزبون، لتناسب كل
                الأذواق والمناسبات. 🎂🤍
                <br></br>Un délicieux cake moelleux, fourré selon le choix et la
                demande du client, pour satisfaire toutes les envies. 🎂🤍
              </>
            }
            image={cakeFor}
          />

          <PetitDiv
            text={
              <>
                Rose: حلوة الوردة بتصميم أنيق ومذاق شهي، محضّرة بعناية لتضيف
                لمسة جميلة ومميزة لمناسباتكم. 🌹🤍
                <br></br>Une délicieuse pâtisserie en forme de rose, élégante et
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

function PetitDiv({ image, text, names, setCart }) {
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
