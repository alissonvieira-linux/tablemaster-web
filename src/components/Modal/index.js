import * as S from './styles';

export default function Modal({ 
  children,
  isOpen,
  handleToggleModal
}) {
  return (
    <>
      {isOpen && (
        <S.Container aria-hidden={!isOpen}>
          <S.Overlay onClick={() => handleToggleModal()} />

          <S.Content>
            <section>{children}</section>
          </S.Content>
        </S.Container>
      )}
    
    </>
  );
} 