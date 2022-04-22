function gradeResult(mark) {
    if (mark > 32 && mark < 40) {
        console.log('The result is D grade');
    }
    else if (mark >= 40 && mark < 50) {
        console.log('The result is C grade');
    }
    else if (mark >= 50 && mark < 60) {
        console.log('The result is B grade')
    }
    else if (mark >= 60 && mark < 70) {
        console.log('The result is A- grade')
    }
    else if (mark >= 70 && mark < 80) {
        console.log('The result is A grade')
    }
    else if (mark >= 80 && mark <= 100) {
        console.log('The result is A+ grade')
    }
    else {
        console.log('The result is F grade');
    }
}

const gpa = gradeResult(29);
