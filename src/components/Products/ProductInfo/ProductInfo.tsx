import React, { useCallback, useState } from "react";
import { FetchProps, Product } from "../../../assets/types";
import {
  ProductInfoContainer,
  ProductDetails,
  ImagePicker,
  CurrentImage,
  Title,
  RateStock,
  AddToCart,
  PrevSite,
  ProductInfoWrapper,
} from "./ProductInfo.styled";
import { FcRating } from "react-icons/fc";
import { TbDiscount2 } from "react-icons/tb";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

const ProductInfo: React.FC<FetchProps> = ({ data, loading, error }) => {
  const { shoppingCart, setShoppingCart } = useStateContext();

  const navigate = useNavigate();

  const [image, setImage] = useState<string>();
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback(
    (shouldZoom: boolean | ((prevState: boolean) => boolean)) => {
      setIsZoomed(shouldZoom);
    },
    []
  );

  const removeProduct = (id: number) => {
    setShoppingCart(shoppingCart.filter((product) => product.id !== id));
  };

  return (
    <ProductInfoContainer>
      {error && <span style={{ textAlign: "center" }}>{error}</span>}
      {loading ? (
        <span style={{ textAlign: "center" }}>Loading product...</span>
      ) : (
        <>
          <PrevSite onClick={() => navigate("/products")}>
            <AiOutlineArrowLeft /> Back to Products
          </PrevSite>
          <ProductInfoWrapper>
            <CurrentImage>
              <ControlledZoom
                isZoomed={isZoomed}
                onZoomChange={handleZoomChange}
              >
                <img
                  src={image || data?.images[0]}
                  alt={`${data?.title} product`}
                />
              </ControlledZoom>
            </CurrentImage>
            <ProductDetails>
              <Title>
                <h2>
                  {data?.title} - {data?.brand}
                </h2>
                <p>{data?.category}</p>
              </Title>
              <b>${data?.price}</b>
              <p>{data?.description}</p>
              <div>
                {data?.images.map((image: string) => {
                  return (
                    <ImagePicker
                      key={image}
                      src={image}
                      onClick={() => {
                        setImage(image);
                      }}
                    />
                  );
                })}
              </div>
              <RateStock>
                <p>
                  <FcRating />
                  {data?.rating}
                </p>
                <p>In stock: {data?.stock}</p>
              </RateStock>
              <AddToCart>
                <p>
                  <TbDiscount2 /> {data?.discountPercentage}%
                </p>
                {shoppingCart.some(
                  (productCart) => productCart.id === data?.id
                ) ? (
                  <button onClick={() => removeProduct(data?.id)}>
                    <MdOutlineRemoveShoppingCart />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setShoppingCart([
                        ...shoppingCart,
                        { ...(data as Product), quantity: 1 },
                      ]);
                    }}
                  >
                    <MdAddShoppingCart />
                  </button>
                )}
              </AddToCart>
            </ProductDetails>
          </ProductInfoWrapper>
        </>
      )}
    </ProductInfoContainer>
  );
};

export default ProductInfo;
