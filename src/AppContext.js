import React, { useContext, useState } from 'react';

export const CurrentValContext = React.createContext();
export const UpdateCurrentValContext = React.createContext();
export const CurrentCalc = React.createContext();
export const UpdateCurrentCalc = React.createContext();
export const InstructionsContext = React.createContext();
export const UpdateInstructionsContext = React.createContext();
export const StagedValContext = React.createContext();
export const UpdateStagedValContext = React.createContext();
export const ResetContext = React.createContext();
export const UpdateResetContext = React.createContext();
export const OperationContext = React.createContext();
export const UpdateOperationContext = React.createContext();

export function useCurrentVal() {
    return useContext(CurrentValContext);
}

export function useUpdateCurrentVal() {
    return useContext(UpdateCurrentValContext);
}

export function useCurrentCalc() {
    return useContext(CurrentCalc);
}

export function useUpdateCurrentCalc() {
    return useContext(UpdateCurrentCalc);
}

export function useInstructions() {
    return useContext(InstructionsContext);
}

export function useUpdateInstructions() {
    return useContext(UpdateInstructionsContext);
}

export function useStagedVal() {
    return useContext(StagedValContext);
}

export function useUpdateStagedVal() {
    return useContext(UpdateStagedValContext);
}

export function useReset() {
    return useContext(ResetContext);
}

export function useUpdateReset() {
    return useContext(UpdateResetContext);
}

export function useOperationContext() {
    return useContext(OperationContext);
}

export function useUpdateOperationContext() {
    return useContext(UpdateOperationContext);
}

export function AppProvider({ children }) {
    const [currentVal, updateCurrentVal] = useState('0');
    const [currentCalc, updateCurrentCalc] = useState('0');
    const [instructions, updateInstructions] = useState('wait');
    const [stagedVal, updateStagedVal] = useState('0');
    const [reset, updateReset] = useState(false);
    const [operation, updateOperation] = useState('');

    return (
        <CurrentValContext.Provider value={currentVal}>
            <UpdateCurrentValContext.Provider value={updateCurrentVal}>
                <CurrentCalc.Provider value={currentCalc}>
                    <UpdateCurrentCalc.Provider value={updateCurrentCalc}>
                        <InstructionsContext.Provider value={instructions}>
                            <UpdateInstructionsContext.Provider
                                value={updateInstructions}>
                                <StagedValContext.Provider value={stagedVal}>
                                    <UpdateStagedValContext.Provider
                                        value={updateStagedVal}>
                                        <ResetContext.Provider value={reset}>
                                            <UpdateResetContext.Provider
                                                value={updateReset}>
                                                <OperationContext.Provider
                                                    value={operation}>
                                                    <UpdateOperationContext.Provider
                                                        value={updateOperation}>
                                                        {children}
                                                    </UpdateOperationContext.Provider>
                                                </OperationContext.Provider>
                                            </UpdateResetContext.Provider>
                                        </ResetContext.Provider>
                                    </UpdateStagedValContext.Provider>
                                </StagedValContext.Provider>
                            </UpdateInstructionsContext.Provider>
                        </InstructionsContext.Provider>
                    </UpdateCurrentCalc.Provider>
                </CurrentCalc.Provider>
            </UpdateCurrentValContext.Provider>
        </CurrentValContext.Provider>
    );
}
