import { ButtonImg, ButtonStyled } from "./styles"
import { ButtonStyledProps } from "./types"

function ProductButton({
  imgSrc = undefined,
  type = "button",
  buttonName,
  onClick,
}: ButtonStyledProps) {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {buttonName}
      {imgSrc && <ButtonImg src={imgSrc} />}
    </ButtonStyled>
  )
}

export default ProductButton
