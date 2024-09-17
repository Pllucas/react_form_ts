import { ReactElement, FormEvent, useState } from "react";


export function useForm(steps: ReactElement[] ) {

    const [currentStep, setCurrrentStep] = useState(0)

    function changeStep(i: number, e?: FormEvent){
        
        if(e) e.preventDefault()

        if(i < 0 || i >= steps.length) return

        setCurrrentStep(i)

    }

    return {
        changeStep,
        currentComponent: steps[currentStep],
        currentStep,
        isLastStep: currentStep + 1 === steps.length ? true:false,
    }
}