import React from 'react';
import products from "../../../../data/products";
import useReactRouter from "use-react-router";
import { StyledBrewerProfile, StyledProfileInner, StyledProfileSegment, StyledSegmentPhoto, StyledFloatedPhoto, StyledTextBodyLink } from "./StyledBrewerProfile";

const BrewerProfile = () => {
    const { match } = useReactRouter();
    const productData = products.find(
        product =>
            ":" + product.sku === match.params.sku
    );
    return (
        <StyledBrewerProfile>
            <StyledProfileInner>
                <h2>About {productData.brewery}</h2>
                <StyledProfileSegment>
                    <StyledSegmentPhoto src={productData.breweryProfile.photos[0].building} alt={productData.brewery} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et numquam, sapiente maxime aut officia commodi dolor at eos ipsum necessitatibus veritatis veniam perferendis suscipit deleniti accusamus laboriosam rem omnis magni.</p>
                </StyledProfileSegment>
                <StyledProfileSegment>
                    <h3>Products</h3>
                    <StyledFloatedPhoto src={productData.breweryProfile.photos[0].products} alt={`Products from ${productData.brewery}`} />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, corporis perferendis in cumque, debitis praesentium eveniet exercitationem nobis eaque quae dignissimos dolor minus sed hic iure nostrum voluptas numquam sint!</p>
                    <div style={{ clear: "both" }}></div>
                </StyledProfileSegment>
                <StyledProfileSegment>
                    <h3>Brewmaster: Mr. {productData.toji}</h3>
                    <StyledSegmentPhoto src={productData.breweryProfile.photos[0].toji} alt={`Mr. ${productData.toji}`} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, atque sed nesciunt incidunt eius veritatis commodi explicabo, perferendis temporibus adipisci aliquid iusto officia voluptates sunt cum tempore deleniti quibusdam similique!</p>
                </StyledProfileSegment>
                {productData.breweryProfile.extraInfo &&
                    <StyledProfileSegment>
                        <h2>More about {productData.brewery}</h2>
                        {productData.breweryProfile.extraInfo.map(item => (
                            <div>
                                <h3>{item.title}</h3>
                                <StyledSegmentPhoto src={item.photo} alt={item.photoCaption} />
                                <p>{item.body}<span><StyledTextBodyLink href={item.infoLink} target="blank"> the town's website.</StyledTextBodyLink></span></p>
                            </div>
                        ))}
                    </StyledProfileSegment>
                }
            </StyledProfileInner>
        </StyledBrewerProfile>
    )
}
export default BrewerProfile;