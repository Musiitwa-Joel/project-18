import { Student } from '@/context/StudentContext';

export const mockStudents: Student[] = [
  {
    id: '1',
    name: 'John Smith',
    studentId: 'STU001',
    faculty: 'Engineering',
    department: 'Computer Science',
    program: 'Bachelor of Science in Computer Science',
    graduationYear: '2025',
    email: 'john.smith@university.edu',
    phone: '+1234567890',
    clearanceStatus: 'Cleared',
    paymentStatus: 'Paid',
    departmentalClearance: {
      academic: true,
      registrar: true,
      examinations: true,
      finance: true,
      alumni: true
    },
    documents: {
      transcript: true,
      idCard: true,
      clearanceForm: true,
      feeReceipt: true
    }
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    studentId: 'STU002',
    faculty: 'Business',
    department: 'Marketing',
    program: 'Bachelor of Business Administration',
    graduationYear: '2025',
    email: 'sarah.johnson@university.edu',
    phone: '+1234567891',
    clearanceStatus: 'In Progress',
    paymentStatus: 'Paid',
    departmentalClearance: {
      academic: true,
      registrar: true,
      examinations: true,
      finance: true,
      alumni: false
    },
    documents: {
      transcript: true,
      idCard: true,
      clearanceForm: true,
      feeReceipt: true
    }
  },
  {
    id: '3',
    name: 'Michael Brown',
    studentId: 'STU003',
    faculty: 'Science',
    department: 'Physics',
    program: 'Bachelor of Science in Physics',
    graduationYear: '2025',
    email: 'michael.brown@university.edu',
    phone: '+1234567892',
    clearanceStatus: 'Rejected',
    paymentStatus: 'Pending',
    departmentalClearance: {
      academic: true,
      registrar: false,
      examinations: false,
      finance: false,
      alumni: false
    },
    documents: {
      transcript: true,
      idCard: true,
      clearanceForm: false,
      feeReceipt: false
    }
  },
  {
    id: '4',
    name: 'Emily Davis',
    studentId: 'STU004',
    faculty: 'Arts',
    department: 'English',
    program: 'Bachelor of Arts in English Literature',
    graduationYear: '2025',
    email: 'emily.davis@university.edu',
    phone: '+1234567893',
    clearanceStatus: 'In Progress',
    paymentStatus: 'Pending',
    departmentalClearance: {
      academic: true,
      registrar: true,
      examinations: true,
      finance: false,
      alumni: false
    },
    documents: {
      transcript: true,
      idCard: true,
      clearanceForm: true,
      feeReceipt: false
    }
  },
  {
    id: '5',
    name: 'David Wilson',
    studentId: 'STU005',
    faculty: 'Medicine',
    department: 'Nursing',
    program: 'Bachelor of Science in Nursing',
    graduationYear: '2025',
    email: 'david.wilson@university.edu',
    phone: '+1234567894',
    clearanceStatus: 'Cleared',
    paymentStatus: 'Paid',
    departmentalClearance: {
      academic: true,
      registrar: true,
      examinations: true,
      finance: true,
      alumni: true
    },
    documents: {
      transcript: true,
      idCard: true,
      clearanceForm: true,
      feeReceipt: true
    }
  },
  {
    id: '6',
    name: 'Jessica Martinez',
    studentId: 'STU006',
    faculty: 'Engineering',
    department: 'Civil Engineering',
    program: 'Bachelor of Science in Civil Engineering',
    graduationYear: '2025',
    email: 'jessica.martinez@university.edu',
    phone: '+1234567895',
    clearanceStatus: 'In Progress',
    paymentStatus: 'Paid',
    departmentalClearance: {
      academic: true,
      registrar: true,
      examinations: false,
      finance: true,
      alumni: false
    },
    documents: {
      transcript: true,
      idCard: true,
      clearanceForm: false,
      feeReceipt: true
    }
  },
  {
    id: '7',
    name: 'James Taylor',
    studentId: 'STU007',
    faculty: 'Business',
    department: 'Finance',
    program: 'Bachelor of Business Administration',
    graduationYear: '2025',
    email: 'james.taylor@university.edu',
    phone: '+1234567896',
    clearanceStatus: 'In Progress',
    paymentStatus: 'Waived',
    departmentalClearance: {
      academic: true,
      registrar: false,
      examinations: true,
      finance: true,
      alumni: false
    },
    documents: {
      transcript: true,
      idCard: false,
      clearanceForm: true,
      feeReceipt: true
    }
  },
  {
    id: '8',
    name: 'Sophia Anderson',
    studentId: 'STU008',
    faculty: 'Science',
    department: 'Chemistry',
    program: 'Bachelor of Science in Chemistry',
    graduationYear: '2025',
    email: 'sophia.anderson@university.edu',
    phone: '+1234567897',
    clearanceStatus: 'Cleared',
    paymentStatus: 'Paid',
    departmentalClearance: {
      academic: true,
      registrar: true,
      examinations: true,
      finance: true,
      alumni: true
    },
    documents: {
      transcript: true,
      idCard: true,
      clearanceForm: true,
      feeReceipt: true
    }
  },
  {
    id: '9',
    name: 'Daniel Thomas',
    studentId: 'STU009',
    faculty: 'Arts',
    department: 'History',
    program: 'Bachelor of Arts in History',
    graduationYear: '2025',
    email: 'daniel.thomas@university.edu',
    phone: '+1234567898',
    clearanceStatus: 'Rejected',
    paymentStatus: 'Pending',
    departmentalClearance: {
      academic: false,
      registrar: false,
      examinations: false,
      finance: false,
      alumni: false
    },
    documents: {
      transcript: false,
      idCard: true,
      clearanceForm: false,
      feeReceipt: false
    }
  },
  {
    id: '10',
    name: 'Olivia Garcia',
    studentId: 'STU010',
    faculty: 'Medicine',
    department: 'Pharmacy',
    program: 'Bachelor of Pharmacy',
    graduationYear: '2025',
    email: 'olivia.garcia@university.edu',
    phone: '+1234567899',
    clearanceStatus: 'In Progress',
    paymentStatus: 'Paid',
    departmentalClearance: {
      academic: true,
      registrar: true,
      examinations: true,
      finance: true,
      alumni: false
    },
    documents: {
      transcript: true,
      idCard: true,
      clearanceForm: true,
      feeReceipt: true
    }
  }
];

export const faculties = [
  'Engineering',
  'Business',
  'Science',
  'Arts',
  'Medicine'
];

export const departments = {
  Engineering: ['Computer Science', 'Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering'],
  Business: ['Marketing', 'Finance', 'Management', 'Accounting'],
  Science: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
  Arts: ['English', 'History', 'Philosophy', 'Languages'],
  Medicine: ['Nursing', 'Pharmacy', 'Public Health', 'Dentistry']
};

export const programs = {
  'Computer Science': ['Bachelor of Science in Computer Science', 'Master of Science in Computer Science'],
  'Civil Engineering': ['Bachelor of Science in Civil Engineering', 'Master of Science in Civil Engineering'],
  'Marketing': ['Bachelor of Business Administration', 'Master of Business Administration'],
  'Finance': ['Bachelor of Business Administration', 'Master of Finance'],
  'Physics': ['Bachelor of Science in Physics', 'Master of Science in Physics'],
  'Chemistry': ['Bachelor of Science in Chemistry', 'Master of Science in Chemistry'],
  'English': ['Bachelor of Arts in English Literature', 'Master of Arts in English'],
  'History': ['Bachelor of Arts in History', 'Master of Arts in History'],
  'Nursing': ['Bachelor of Science in Nursing', 'Master of Science in Nursing'],
  'Pharmacy': ['Bachelor of Pharmacy', 'Master of Pharmacy']
};