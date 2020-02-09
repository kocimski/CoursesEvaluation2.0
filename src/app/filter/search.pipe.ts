import { Pipe, PipeTransform } from "@angular/core";

import { Course } from "../course";

@Pipe({
  name: "searchByName"
})
export class SearchPipeByName implements PipeTransform {
  transform(courses: Course[], searchText: string): Course[] {
    if (!courses) {
      return [];
    }
    if (!searchText) {
      return courses;
    }

    console.log(courses);
    searchText = searchText.toLowerCase();
    return courses.filter(course => {
      return course.name.toLowerCase().includes(searchText);
    });
  }
}

@Pipe({
  name: "searchByMinECTS"
})
export class SearchPipeByMinECTS implements PipeTransform {
  transform(courses: Course[], searchECTS: number): Course[] {
    if (!courses) {
      return [];
    }
    if (!searchECTS) {
      return courses;
    }
    console.log(courses);
    return courses.filter(course => {
      if (course.ects >= searchECTS) {
        return course;
      }
    });
  }
}

@Pipe({
  name: "searchByMaxECTS"
})
export class SearchPipeByMaxECTS implements PipeTransform {
  transform(courses: Course[], searchECTS: number): Course[] {
    if (!courses) {
      return [];
    }
    if (!searchECTS) {
      return courses;
    }
    console.log(courses);
    return courses.filter(course => {
      if (course.ects <= searchECTS) {
        return course;
      }
    });
  }
}

@Pipe({
  name: "searchByMinTerm"
})
export class SearchPipeByMinTerm implements PipeTransform {
  transform(courses: Course[], searchSemester: number): Course[] {
    if (!courses) {
      return [];
    }
    if (!searchSemester) {
      return courses;
    }
    console.log(courses);
    return courses.filter(course => {
      if (course.term >= searchSemester) {
        return course;
      }
    });
  }
}

@Pipe({
  name: "searchByMaxTerm"
})
export class SearchPipeByMaxTerm implements PipeTransform {
  transform(courses: Course[], searchSemester: number): Course[] {
    if (!courses) {
      return [];
    }
    if (!searchSemester) {
      return courses;
    }
    console.log(courses);
    return courses.filter(course => {
      if (course.term <= searchSemester) {
        return course;
      }
    });
  }
}

@Pipe({
  name: "searchByMinRating"
})
export class SearchPipeByMinRating implements PipeTransform {
  transform(courses: Course[], searchMinRating: number): Course[] {
    if (!courses) {
      return [];
    }
    if (!searchMinRating) {
      return courses;
    }
    console.log(courses);
    return courses.filter(course => {
      if (course.rate >= searchMinRating) {
        return course;
      }
    });
  }
}

@Pipe({
  name: "searchByMaxRating"
})
export class SearchPipeByMaxRating implements PipeTransform {
  transform(courses: Course[], searchMaxRating: number): Course[] {
    if (!courses) {
      return [];
    }
    if (!searchMaxRating) {
      return courses;
    }
    console.log(courses);
    return courses.filter(course => {
      if (course.rate <= searchMaxRating) {
        return course;
      }
    });
  }
}

@Pipe({
  name: "coursePagination"
})
export class PaginationPipe implements PipeTransform {
  transform(
    courses: Course[],
    page: number,
    toDisplayNumber: number
  ): Course[] {
    if (!courses) {
      return [];
    }

    const displayCourses = [];
    const startDisplayNumber = (page - 1) * toDisplayNumber;
    const min = startDisplayNumber;
    let max = 0;

    if (courses.length - startDisplayNumber >= toDisplayNumber) {
      max = +startDisplayNumber + +toDisplayNumber;
    } else {
      max = +startDisplayNumber + (+courses.length % +toDisplayNumber);
    }

    for (let i = min; i < max; i = i + 1) {
      displayCourses.push(courses[i]);
    }

    return displayCourses;
  }
}
