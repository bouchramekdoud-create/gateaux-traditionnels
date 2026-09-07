  
  export function Commande({cart}){
    return(
        <div>
            <h1 style={{
                textAlign:"center",
                fontFamily:"cursive",


            }}>Tes Commandes</h1>
            {cart.map((names) => (
                <div>
                <p>{names}</p>
            </div>
            ))}
            
        </div>
    )
}