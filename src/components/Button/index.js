import * as S from './styles';

export default function Button({ children, onClick }) {
  return (
    <S.Container onClick={onClick} className="bg-blue-500 font-semibold">
      {children}
    </S.Container>
  )
}