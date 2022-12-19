```javascript
  function useToggle({onOpen, onClose}) {
    const [isOpen, setIsOpen] = useState(false);

    function toggler() {
      const nextIsOpen = !isOpen;
      setIsOpen(nextIsOpen);
      if (nextIsOpen) {
        onOpen()
      } else {
        onClose()
      }
    }

    return [isOpen, toggler];
  }
  function Product({onOpen, onClose}) {
    const [isOpen, toggler] = useToggle({onOpen, onClose});
    return (
      <div>
        <button onClick={toggler}>Toggle quick view</button>
      </div>
    )
  }
```