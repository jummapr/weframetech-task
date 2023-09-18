"use client";

import { FC, useEffect, useState } from 'react'
import { Progress } from './ui/progress';

interface ProgressBarProps {
  value: number;
}

const ProgressBar: FC<ProgressBarProps> = ({value}) => {
    const [progress, setProgress] = useState(value)
 
   
    return <Progress value={progress} color='#6418C3' className='' />
}

export default ProgressBar