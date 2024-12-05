import { useEffect, useState } from "react";
import css from "./Modal.module.css";

/*
Методи життевого циклу:
1. Монтування
useEffect(()=>{
    console.log("modal mounted");
    }, []);

    -функція яка виконується, кожен раз, після рендеру компоненти.

    для чого використовується:
    1. Надсилаються мережеві запити, після монтування.
    2. Для встановлення глобальних слухачів подій window.addEventListener
    3. Встановлюються таймери та інтервали (setInterval, setTimeout)
    4. Виконуються якісь додаткові функції ефекти(відключення скролу у користувача, коли відкрилась модалка)

2. Розмонтування (демонтування) 
  useEffect(() => {
    console.log("Ya narodyvsja");

    // додавання слухача==========================!!!!!!!!!!!!!!!!!!!!
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      console.log("Ya pomer");
      // прибирання слухача =======================!!!!!!!!!!!!!!!!!!
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

    - Колбек-функція, яка виконується, кожен раз, перед тим, як компонента буде повністю видалена з розмітки.     для чого використовується:
    1. Відхиляти мережеві запити, після монтування.
    2. Для прибирання глобальних слухачів подій window.addEventListener
    3. Прибираються таймери та інтервали (clearInterval, clearTimeout)
    4. Видаляються якісь додаткові функції ефекти(Включення скролу у користувача, коли закрилась мочалка) 
    
3. Оновлення 

useEffect(() => {
    console.log("Counter value", counter);
  }, [counter]);

  -функція яка виконується кожний раз після зміни пропсів, або змінення стейту компонентів.

  Для чого використовується:
  1. Надсилаються мережеві запити за даними після оновлення. 
  2. Синхронізація данних з локальним сховищем. 
*/

const Modal = ({ onCloseModal }) => {
  const [counter, setCounter] = useState(() => {
    return parseInt(localStorage.getItem("counterValue") ?? 0); //parseInt = приводить до числа та робить розпарс з localStorage;
  });

  useEffect(() => {
    console.log("Counter value", counter);
    localStorage.setItem("counterValue", counter); //відправляємо зміненний counter до localStorage;
  }, [counter]); //використовуємо МАСИВ ЗАЛЕЖНОСТЕЙ, щоб отримувати оновленний стан counter!!!

  useEffect(() => {
    console.log("Ya narodyvsja");

    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onCloseModal();
      }
    };
    // додавання слухача
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // прибирання слухача
      window.removeEventListener("keydown", handleKeyDown);
      console.log("Ya pomer");
    };
  }, [onCloseModal]);
  // закриття модального вікна по кліку на бєкдроп
  const onHandleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <div className={css.backdrop} onClick={onHandleBackdropClick}>
      <div className={css.modal}>
        <button
          type="button"
          aria-label="Close modal button"
          className={css.closeModalBtn}
          onClick={onCloseModal}
        >
          &times;
        </button>
        <h3 className={css.title}>Modal</h3>
        <p className={css.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae minus
          architecto sed suscipit rerum. Nostrum illo unde beatae ad omnis?
        </p>
        <button
          type="button"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Click to increment counter {counter}
        </button>
      </div>
    </div>
  );
};

export default Modal;
