import { useState } from "react";
import { useStudents } from "@/context/StudentContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Search,
  Filter,
  Download,
  Printer,
  FileText,
  RefreshCw,
  CheckCircle,
  ListCheck,
  FileDown,
  Mail,
  AlertTriangle,
  GraduationCap,
  BookOpen,
  Award,
  Calendar,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { faculties, departments } from "@/data/mockData";

export default function GraduationList() {
  const { students } = useStudents();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  // Filter students based on search and filters
  const eligibleStudents = students.filter(
    (student) =>
      student.clearanceStatus === "Cleared" && student.paymentStatus === "Paid"
  );

  const filteredStudents = eligibleStudents.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFaculty = selectedFaculty
      ? student.faculty === selectedFaculty
      : true;
    const matchesDepartment = selectedDepartment
      ? student.department === selectedDepartment
      : true;
    const matchesYear = selectedYear
      ? student.graduationYear === selectedYear
      : true;

    return matchesSearch && matchesFaculty && matchesDepartment && matchesYear;
  });

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedStudents(filteredStudents.map((student) => student.id));
    } else {
      setSelectedStudents([]);
    }
  };

  const handleSelectStudent = (studentId: string, checked: boolean) => {
    if (checked) {
      setSelectedStudents([...selectedStudents, studentId]);
    } else {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId));
    }
  };

  const handleGenerateList = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowConfirmation(true);
    }, 1500);
  };

  const handleConfirmList = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowConfirmation(false);
      toast({
        title: "Graduation List Finalized",
        description: `${filteredStudents.length} students have been added to the final graduation list`,
      });
    }, 1000);
  };

  const handleExportPDF = () => {
    toast({
      title: "Export Started",
      description: "Graduation list is being exported to PDF",
    });
  };

  const handleExportExcel = () => {
    toast({
      title: "Export Started",
      description: "Graduation list is being exported to Excel",
    });
  };

  const handlePrint = () => {
    toast({
      title: "Print Job Started",
      description: "Graduation list is being prepared for printing",
    });
  };

  const handleEmailNotifications = () => {
    toast({
      title: "Email Notifications Sent",
      description: `${selectedStudents.length} students have been notified about their graduation status`,
    });
    setSelectedStudents([]);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          Graduation List Management
        </h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleExportPDF}>
                <FileText className="mr-2 h-4 w-4" />
                Export as PDF
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleExportExcel}>
                <FileDown className="mr-2 h-4 w-4" />
                Export as Excel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            size="sm"
            onClick={handleGenerateList}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <ListCheck className="mr-2 h-4 w-4" />
            )}
            Generate List
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Eligible Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <span className="text-2xl font-bold">
                  {eligibleStudents.length}
                </span>
              </div>
              <Badge
                variant="outline"
                className="border-green-500 text-green-500"
              >
                Cleared
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Graduation Year
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <span className="text-2xl font-bold">2025</span>
              </div>
              <Badge variant="outline">Current</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Faculties Represented
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <span className="text-2xl font-bold">{faculties.length}</span>
              </div>
              <Badge variant="outline">All Faculties</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Honors Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <span className="text-2xl font-bold">12</span>
              </div>
              <Badge
                variant="outline"
                className="border-yellow-500 text-yellow-500"
              >
                Honors
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Graduation Candidate List</CardTitle>
          <CardDescription>
            Students who have completed all clearance requirements and are
            eligible for graduation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name or ID..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Select
                  value={selectedFaculty}
                  onValueChange={setSelectedFaculty}
                >
                  <SelectTrigger className="w-[160px]">
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      <span>{selectedFaculty || "Faculty"}</span>
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Faculties</SelectItem>
                    {faculties.map((faculty) => (
                      <SelectItem key={faculty} value={faculty}>
                        {faculty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selectedDepartment}
                  onValueChange={setSelectedDepartment}
                >
                  <SelectTrigger className="w-[160px]">
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      <span>{selectedDepartment || "Department"}</span>
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    {selectedFaculty &&
                      departments[
                        selectedFaculty as keyof typeof departments
                      ]?.map((dept) => (
                        <SelectItem key={dept} value={dept}>
                          {dept}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>

                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-[160px]">
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      <span>{selectedYear || "Year"}</span>
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {selectedStudents.length > 0 && (
              <div className="flex items-center justify-between p-2 bg-muted rounded-md">
                <span className="text-sm font-medium">
                  {selectedStudents.length} students selected
                </span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleEmailNotifications}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Notify Selected
                  </Button>
                </div>
              </div>
            )}

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox
                        checked={
                          selectedStudents.length === filteredStudents.length &&
                          filteredStudents.length > 0
                        }
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead>Faculty/Department</TableHead>
                    <TableHead>Program</TableHead>
                    <TableHead>Clearance Status</TableHead>
                    <TableHead>Payment Status</TableHead>
                    <TableHead>Graduation Year</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={7}
                        className="text-center py-8 text-muted-foreground"
                      >
                        No eligible students found matching your criteria
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedStudents.includes(student.id)}
                            onCheckedChange={(checked) =>
                              handleSelectStudent(student.id, !!checked)
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="font-medium">{student.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {student.studentId}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>{student.faculty}</span>
                            <span className="text-xs text-muted-foreground">
                              {student.department}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{student.program}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="border-green-500 text-green-500 flex items-center gap-1"
                          >
                            <CheckCircle className="h-3 w-3" />
                            Cleared
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="border-green-500 text-green-500"
                          >
                            Paid
                          </Badge>
                        </TableCell>
                        <TableCell>{student.graduationYear}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Graduation List</DialogTitle>
            <DialogDescription>
              You are about to finalize the graduation list for {selectedYear}.
              This action will lock the list and notify all eligible students.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">
                This action cannot be undone.
              </span>
            </div>
            <div className="rounded-md border p-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">
                  Total Eligible Students:
                </span>
                <span className="text-sm">{filteredStudents.length}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">
                  Faculties Represented:
                </span>
                <span className="text-sm">
                  {new Set(filteredStudents.map((s) => s.faculty)).size}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Graduation Year:</span>
                <span className="text-sm">{selectedYear}</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowConfirmation(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleConfirmList} disabled={isLoading}>
              {isLoading ? (
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <CheckCircle className="mr-2 h-4 w-4" />
              )}
              Confirm and Finalize
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// This is a placeholder for the DropdownMenu components
function DropdownMenu(props: { children: React.ReactNode }) {
  return <div {...props} />;
}

function DropdownMenuTrigger(props: {
  asChild: boolean;
  children: React.ReactNode;
}) {
  return <div {...props} />;
}

function DropdownMenuContent(props: {
  align: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
      {...props}
    />
  );
}

function DropdownMenuItem(props: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      className="flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray-100"
      {...props}
    />
  );
}

function ChevronDown(props: any) {
  return <div {...props} />;
}
