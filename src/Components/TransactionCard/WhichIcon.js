import {
  Paid,
  Favorite,
  ShoppingCart,
  Restaurant,
  DirectionsCar,
  Weekend,
  MenuBook,
} from '@mui/icons-material'

const WhichIcon = ({ categoria }) => {
  if (categoria === 'Saúde') {
    return <Favorite />
  }
  if (categoria === 'Compras') {
    return <ShoppingCart />
  }
  if (categoria === 'Alimentação') {
    return <Restaurant />
  }
  if (categoria === 'Lazer') {
    return <Weekend />
  }
  if (categoria === 'Estudos') {
    return <MenuBook />
  }
  if (categoria === 'Locomoção') {
    return <DirectionsCar />
  }
  if (categoria === 'Salário') {
    return <Paid />
  } else {
    return <p>error</p>
  }
}

export default WhichIcon
