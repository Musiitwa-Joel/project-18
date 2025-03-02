import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  User, 
  FileText, 
  DollarSign, 
  CheckCircle, 
  XCircle, 
  Clock, 
  BarChart2, 
  PieChart, 
  TrendingUp, 
  Download,
  RefreshCw
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { mockStudents } from '@/data/mockData';
import RecentActivityTable from '@/components/dashboard/RecentActivityTable';
import ClearanceProgressChart from '@/components/dashboard/ClearanceProgressChart';
import DepartmentProgressChart from '@/components/dashboard/DepartmentProgressChart';
import FinancialSummaryChart from '@/components/dashboard/FinancialSummaryChart';

export default function Dashboard() {
  const { toast } = useToast();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const totalStudents = mockStudents.length;
  const clearedStudents = mockStudents.filter(s => s.clearanceStatus === 'Cleared').length;
  const pendingStudents = mockStudents.filter(s => s.clearanceStatus === 'In Progress').length;
  const rejectedStudents = mockStudents.filter(s => s.clearanceStatus === 'Rejected').length;
  const paidStudents = mockStudents.filter(s => s.paymentStatus === 'Paid').length;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "Dashboard Refreshed",
        description: "Latest data has been loaded",
      });
    }, 1000);
  };

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Dashboard data is being exported to Excel",
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
            {isRefreshing ? (
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="mr-2 h-4 w-4" />
            )}
            Refresh
          </Button>
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStudents}</div>
            <p className="text-xs text-muted-foreground">
              +{Math.floor(Math.random() * 10)}% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cleared Students</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clearedStudents}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((clearedStudents / totalStudents) * 100)}% of total applicants
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingStudents}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((pendingStudents / totalStudents) * 100)}% of total applicants
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fee Payments</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{paidStudents}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((paidStudents / totalStudents) * 100)}% payment rate
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Clearance Progress Overview</CardTitle>
            <CardDescription>
              Track student clearance progress across departments
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ClearanceProgressChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Department Completion</CardTitle>
            <CardDescription>
              Clearance completion rate by department
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DepartmentProgressChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest clearance actions and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivityTable />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Financial Summary</CardTitle>
            <CardDescription>
              Graduation fee payment status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FinancialSummaryChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Clearance Status by Faculty</CardTitle>
            <CardDescription>
              Overall clearance progress for each faculty
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                    <span>Faculty of Engineering</span>
                  </div>
                  <span className="font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                    <span>Faculty of Business</span>
                  </div>
                  <span className="font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                    <span>Faculty of Science</span>
                  </div>
                  <span className="font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                    <span>Faculty of Arts</span>
                  </div>
                  <span className="font-medium">54%</span>
                </div>
                <Progress value={54} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                    <span>Faculty of Medicine</span>
                  </div>
                  <span className="font-medium">81%</span>
                </div>
                <Progress value={81} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common administrative tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Generate Graduation List
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <DollarSign className="mr-2 h-4 w-4" />
              Payment Verification
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <CheckCircle className="mr-2 h-4 w-4" />
              Bulk Clearance Approval
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <XCircle className="mr-2 h-4 w-4" />
              Review Rejected Applications
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BarChart2 className="mr-2 h-4 w-4" />
              Generate Reports
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}