import React from 'react';
import useReactRouter from "use-react-router";
import products from "../../../../data/products";
import { StyledProductDescription, StyledProductDescriptionContent } from "./StyledProductDescription";

const ProductDescription = () => {
    const { match } = useReactRouter();
    const productData = products.find(
        product =>
            ":" + product.sku === match.params.sku
    );
    return (
        <StyledProductDescription>
            <StyledProductDescriptionContent>
                {productData.descFull &&
                    <div>
                        <span><b>Description: </b></span>
                        <span>{productData.descFull}</span>
                    </div>
                }
                <p>The keyword to describe this sake is: <span><b>KEYWORD</b></span></p>
                <p><span><b>Food pairings: </b></span> &nbsp;Sushi &amp; Sashimi, Grilled Fish, Light Pasta, Shellfish, Grilled Meats, BBQ &amp; Skewers, Fried or Salty Dishes, Deep Pastas, Stews &amp; Soups, Fare with Heavy Sauces, Game and Fowl, Salads, Grilled and Steamed Veggies, Fruit Salad, Tofu and Soba, Turkey, Ham and Game, Stuffing and Gravy, Fried and Mashed Potatoes, Hamburgers, Pizza, Sandwiches, Mac &amp; Cheese, Assorted Cheeses, Rich and Creamy (Creme Brulee, Custards), Chocolates (Cakes, Fudges), Fruit (Parfaits, Pies)
                </p>
                {productData.tasteProfileBeer && productData.tasteProfileWine &&
                    <div>
                        <span><b>Taste Profile: </b></span>
                        {productData.tasteProfileBeer && <span><i>BEER</i>: {productData.tasteProfileBeer} </span>}
                        {productData.tasteProfileWine && <span><i>WINE</i>: {productData.tasteProfileWine}</span>}
                    </div>
                }
                {productData.brewery && <p><span><b>Brewery: </b> {productData.brewery}</span></p>}
                {productData.type && <p><span><b>Sake Type: </b> {productData.type}</span></p>}
                {productData.bottleSize && <p><span><b>Bottle Size: </b> {productData.bottleSize}ml</span></p>}
                {productData.founded && <p><span><b>Founded:</b> {productData.founded}</span></p>}
                {productData.prefecture && <p><span><b>Prefecture: </b> {productData.prefecture}</span></p>}
                {productData.toji && <p><span><b>Toji (Master Brewer)</b> {productData.toji}</span></p>}
                {productData.ingredients &&
                    <div>
                        <span><b>Ingredients: </b></span>
                        {productData.ingredients.rice && <span><i>Ricetype: </i>{productData.ingredients.rice}; </span>}
                        {productData.ingredients.water && <span><i>Water: </i>{productData.ingredients.water}; </span>}
                        {productData.ingredients.yeast && <span><i>Yeast: </i>{productData.ingredients.yeast}; </span>}
                        {productData.ingredients.sulfites === false ? (<span><b>No sulfites; </b></span>) : ""}
                        {productData.ingredients.preservatives === false ? (<span><b>No preservatives; </b></span>) : ""}
                    </div>
                }
                {productData.polishRatio && <p><span><b>Seimaibuai (Amount of rice left after milling): </b> {productData.polishRatio}%</span></p>}
                {productData.abv && <p><span><b>Alcohol Content (ABV): </b> {productData.abv}%</span></p>}
                {productData.sakeMeterValue && <p><span><b>Sake Meter Value (Low: Sweet / High: Dry): </b>{Number(productData.sakeMeterValue)}</span></p>}
                {productData.sweetOrDry && <p><span><b>Sweet or Dry: </b> {productData.sweetOrDry}</span></p>}
                {productData.body && <p><span><b>Body: </b> {productData.body}</span></p>}
                {productData.acidity && <p><span><b>Acidity: </b> {productData.acidity}</span></p>}
                {productData.aminoAcids && <p><span><b>Amino Acids: </b> {productData.aminoAcids}</span></p>}
                {productData.servingTemp && <p><span><b>Serving Temp: </b> {productData.servingTemp}</span></p>}
            </StyledProductDescriptionContent>
        </StyledProductDescription>
    )
}
export default ProductDescription;