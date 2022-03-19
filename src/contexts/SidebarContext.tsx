import { createContext, ReactNode, useState } from 'react';

interface ISidebarContext {
  isActive: boolean,
  setIsActive: (newState: boolean) => void,
}

type SidebarContextProps = { children: ReactNode }

const initialValue = {
  isActive: true,
  setIsActive: () => {},
}

export const SidebarContext = createContext<ISidebarContext>(initialValue);

export const SidebarContextProvider = ({ children }: SidebarContextProps) => {
  const [isActive, setIsActive] = useState(initialValue.isActive);
  return (
    <SidebarContext.Provider value={{ isActive, setIsActive }}>
      { children }
    </SidebarContext.Provider>
  )
}