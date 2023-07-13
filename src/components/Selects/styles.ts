import Select from "react-select"

export const selectStyles = { 
    menu: (styles: any) => ({
        ...styles,
        zIndex: 999,
        border: "none",
        
        backgroundColor: "#18181b0",
        
    }),
    control: (styles: any) => ({
        ...styles,
        backgroundColor: "#CCCCCC",
        border: "none",
        
        boxShadow: "none",
        ':hover': {
            border: "none"
        }
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color:"#0A0A0A",
      
  }),
  multiValue: (styles: any) => ({
    ...styles,
    backgroundColor:"#66717E",
    color:"#0A0A0A"
    
}),
    option: (styles: any, {isFocused}: any) => ({
        ...styles,
        backgroundColor: isFocused ? "#D9D7D3" : "#E3E1DE",
        color: isFocused ? "#0A0A0A" : "#0A0A0A",
        ':hover': {
            backgroundColor: "#D9D7D3 "
        }
    })};